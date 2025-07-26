import "./index.css";
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { callClovaScoreOnly } from "./components/service/ClovaSummary";
import INSIGHT_CONTENTS from "./components/constants/insightContents";
import {
  ANALYST_COMPANY,
  ANALYST_Industry,
} from "./components/constants/analyst_Analysis";
import { EMOTIONS } from "./components/constants/emotion";

render(<App />, document.getElementById("root"));

// 내부 저장소
export let TOTAL_SCORES: number[] = [0, 0, 0, 0];

// 외부 접근 안전 함수
export function getTotalScores(): number[] {
  return TOTAL_SCORES;
}

// 초기화 실행
(async () => {
  try {
    const clovaScores = await Promise.all(
      INSIGHT_CONTENTS.slice(0, 4).map(callClovaScoreOnly)
    );

    const extract = (text: string): number | null => {
      const match = text.match(/([\d.]+)%/);
      return match ? parseFloat(match[1]) : null;
    };

    const analysisScores = clovaScores.map((_, idx) => {
      const industry = extract(ANALYST_Industry[idx]);
      const company = extract(ANALYST_COMPANY[idx]);
      if (industry !== null && company !== null) {
        return ((industry + company) / 2 / 100) * 40;
      } else if (industry !== null) {
        return (industry / 100) * 40;
      } else {
        return 0;
      }
    });

    const emotionScores = EMOTIONS.map((text) => {
      const match = text.match(/([\d.]+)%/);
      const percent = match ? parseFloat(match[1]) : 0;
      return (percent / 100) * 20;
    });

    const totalScores = clovaScores.map((clova, idx) => {
      const clovaScore = clova !== null ? (clova / 100) * 40 : 0;
      const analysisScore = analysisScores[idx] ?? 0;
      const emotionScore = emotionScores[idx] ?? 0;
      return clovaScore + analysisScore + emotionScore;
    });

    TOTAL_SCORES = totalScores;
    console.log("TOTAL_SCORES 초기화 완료:", TOTAL_SCORES);
  } catch (err) {
    console.error("점수 초기화 실패:", err);
    TOTAL_SCORES = [0, 0, 0, 0];
  }
})();
