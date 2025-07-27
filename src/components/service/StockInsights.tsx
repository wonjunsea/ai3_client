import axios from "axios";
import { Articles } from "../constants/articles";

export const StockScores = async (item: Articles): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `다음 기준으로 100점 만점에 점수를 계산해주세요:
        - positive와 negative 비율로 20점 계산 (positive/(positive+negative) * 20)
        - analystRating을 10점 만점 기준으로 40점으로 변환 (analystRating/10 * 40)
        - newsSummary 내용을 분석해서 40점 계산
        - 세 점수를 합산하여 최종 100점 만점 점수를 숫자로만 반환해주세요.`,
      },
      {
        role: "user",
        content: `positive: ${item.positive}, negative: ${item.negative}, analystRating: ${item.analystRating}, newsSummary: ${item.newsSummary}`,
      },
    ],
    topP: 0.9,
    temperature: 0.0,
    repetitionPenalty: 1.1,
    maxTokens: 512,
    includeAiFilters: true,
  });

  const scoreText = res.data.result.message.content;
  const scoreMatch = scoreText.match(/\d+/);

  if (scoreMatch) {
    return Math.min(parseInt(scoreMatch[0]), 100);
  }

  return 0; // 점수를 추출할 수 없는 경우
};
