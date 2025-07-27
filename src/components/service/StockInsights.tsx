import axios from "axios";
import { useState, useEffect } from "react";

interface ClovaSummaryProps {
  text: string;
  onSummary?: (result: string) => void;
}

//1.긍부정 점수 추출{20점}
export const getPosNegScore = async (
  positive: number,
  negative: number
): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `positive와 negative 비율을 분석하여 20점 만점 점수를 숫자로만 반환해주세요. (공식: positive/(positive+negative) * 20)`,
      },
      {
        role: "user",
        content: `positive: ${positive}, negative: ${negative}`,
      },
    ],
  });
  return parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
};
//2.분석가 의견 점수 추출{40점}
export const getAnalystScore = async (
  analystRating: number
): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `analystRating을 10점 만점 기준으로 40점으로 변환하여 점수(숫자만)로 반환해주세요. (공식: analystRating/10 * 40)`,
      },
      {
        role: "user",
        content: `analystRating: ${analystRating}`,
      },
    ],
  });
  return parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
};

//3.뉴스 요약 점수 추출 {40점}
export const getNewsScore = async (newsSummary: string): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `newsSummary 내용을 분석하여 40점 만점 점수를 숫자로만 반환해주세요.`,
      },
      {
        role: "user",
        content: `newsSummary: ${newsSummary}`,
      },
    ],
  });
  return parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
};

//4.현재 뉴스 요약 텍스트-> RecentInsights.tsx에서만 사용됩니다! + 반환값은 요약 텍스트입니다.
export default function ClovaSummary({ text, onSummary }: ClovaSummaryProps) {
  const [summary, setSummary] = useState("");

  const [loading, setLoading] = useState(false);

  const callClova = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/api/clova-summary", {
        messages: [
          {
            role: "system",
            content:
              "- 당신은 30년동안 경제 뉴스를 요약해온 전문가입니다. \n" +
              "- 독자가 빠르게 요지를 파악할 수 있도록 해주세요\n" +
              "- 반드시 아래 형식을 따르세요:\n" +
              "1. 결론을 한문장으로 요약해서 먼저 제시해주세요\n" +
              "2. 전체 내용을 3문단으로 요약해 주세요." +
              "- 반드시 위 순서와 형식을 유지할 것\n" +
              "- 예시:결론 한 문장\n문단 1\n문단 2\n문단 3",
          },
          {
            role: "user",
            content: text,
          },
        ],
        topP: 0.9,
        temperature: 0.0,
        repetitionPenalty: 1.1,
        maxTokens: 512,
        includeAiFilters: true,
      });
      const result = res.data.result.message.content;
      setSummary(result);
      if (onSummary) onSummary(result);
    } catch (err: any) {
      setSummary("요약 실패");
      if (onSummary) onSummary("요약 실패");
    }
    setLoading(false);
  };

  // 👇 text가 변경될 때마다 요약 실행
  useEffect(() => {
    if (text && text.length > 5) {
      callClova();
    }
  }, [text]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>뉴스 요약 결과</h2>
      {loading && <div>요약 중...</div>}
      {!text && (
        <div style={{ color: "red", marginTop: 8 }}>
          요약할 텍스트가 없습니다.
        </div>
      )}
      <pre style={{ whiteSpace: "pre-wrap", marginTop: "1em" }}>{summary}</pre>
    </div>
  );
}