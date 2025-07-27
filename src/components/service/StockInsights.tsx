import axios from "axios";
import { useState, useEffect } from "react";

interface ClovaSummaryProps {
  text: string;
  onSummary?: (result: string) => void;
}

//각각 100점 넘게 나올때가 있어서 min사용해 가중치 조정했습니다.
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
  const score = parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
  return Math.min(score, 20); // 최대 20점으로 제한
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
  const score = parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
  return Math.min(score, 40); // 최대 40점으로 제한
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
  const score = parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
  return Math.min(score, 40); // 최대 40점으로 제한
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
              "- 반드시 위 순서와 형식을 유지할 것\n"
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

  useEffect(() => {
    if (text && text.length > 5) {
      callClova();
    }
  }, [text]);

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-800">AI 뉴스 요약</h2>
      </div>
      
      {loading && (
        <div className="flex items-center gap-2 text-blue-600 mb-4">
          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="font-medium">AI가 뉴스를 분석하고 있습니다...</span>
        </div>
      )}
      
      {!text && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 text-red-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">요약할 텍스트가 없습니다.</span>
          </div>
        </div>
      )}
      
      {summary && (
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-sm">
              {summary}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}