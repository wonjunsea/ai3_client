import { FileTextIcon, ExternalLinkIcon } from "lucide-react";

import {
  COMPANY_NAMES,
  MAIN_CATEGORIES,
  AI_EMOTIONS,
} from "./constants/Insight";

interface Insight {
  companyName?: string;
  title: string;
  mainCategory: string;
  subCategories: string[];
  aiEmotion: string;
  score: number;
  date: string;
  source: string;
}

const insightData: Insight[] = [
  {
    companyName: COMPANY_NAMES.SAMSUNG.name,
    title: "삼성물산, 신정동 1152 재개발 수주…단지명 '목동 래미안 트라메종'",
    mainCategory: MAIN_CATEGORIES.INFORMATION_TECHNOLOGY,
    subCategories: ["건설", "KRX 300"],
    aiEmotion: AI_EMOTIONS.POSITIVE,
    score: 78,
    date: "2025-07-20",
    source: "아시아경제",
  },
  {
    title:
      "J&J 실적에 바이오株 반등…트럼프發 관세 타격 없다, 그 이유는?[투자360]",
    mainCategory: MAIN_CATEGORIES.HEALTHCARE,
    subCategories: ["바이오"],
    aiEmotion: AI_EMOTIONS.POSITIVE,
    score: 65,
    date: "2024-07-20",
    source: "해럴드경제",
  },
  {
    title:
      "‘타코맨’ 트럼프, 車 관세 높일까?…“25%만 지켜도 자동차株 주가 반등”[투자360]",
    mainCategory: MAIN_CATEGORIES.AUTOMOTIVE,
    subCategories: ["자동차", "자동차부품"],
    aiEmotion: AI_EMOTIONS.NEGATIVE,
    score: 82,
    date: "2024-07-20",
    source: "서울경제",
  },
  {
    companyName: COMPANY_NAMES.CHIPOLE.name,
    title: "치폴레(CMG), 하반기 성장세 가속 기대돼 -BMO",
    mainCategory: MAIN_CATEGORIES.CONSUMER_STAPLES,
    subCategories: ["식품"],
    aiEmotion: AI_EMOTIONS.POSITIVE,
    score: 73,
    date: "2024-07-18",
    source: "연합인포해외",
  },
];

// AI 감정에 따른 스타일 맵
const emotionStyles = {
  긍정적: "bg-[#d2f5c4] text-green-700",
  보류: "bg-[#fff7b2] text-yellow-700",
  부정적: "bg-[#ffd6d6] text-red-600",
};

const scoreColor = (score: number) => {
  if (score >= 75) return "text-green-600";
  if (score >= 60) return "text-blue-600";
  return "text-red-600";
};

const InsightItem = ({ insight }: { insight: Insight }) => {
  return (
    <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="flex items-start">
        <div className="p-2 bg-blue-50 rounded-lg mr-3">
          <FileTextIcon className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-1 flex-nowrap">
              <span className="text-xs px-2 py-1 bg-[#e2ebf0] rounded-full text-gray-600">
                {insight.mainCategory}
              </span>
              {insight.subCategories.map((sub, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-[#c2e9fb] rounded-full text-blue-600"
                >
                  {sub}
                </span>
              ))}
              {insight.companyName && (
                <span className="text-xs px-2 py-1 bg-[#ffe0b2] rounded-full text-orange-700">
                  {insight.companyName}
                </span>
              )}
              {insight.aiEmotion && (
                <span
                  className={`px-3 py-1 rounded-full ml-1 text-xs font-bold ${
                    emotionStyles[
                      insight.aiEmotion as keyof typeof emotionStyles
                    ] ?? "bg-gray-200 text-gray-700"
                  }`}
                  style={{ display: "inline-block" }}
                >
                  {insight.aiEmotion}
                </span>
              )}
            </div>
            <span
              className={`text-xs font-medium ${scoreColor(insight.score)}`}
            >
              AI 점수: {insight.score}/100
            </span>
          </div>
          <h4 className="font-medium mt-2">{insight.title}</h4>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <div>
              {insight.date} | {insight.source}
            </div>
            <button className="flex items-center text-blue-600 hover:text-blue-800">
              <span className="mr-1">자세히</span>
              <ExternalLinkIcon className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const RecentInsights = () => {
  const categories = Object.values(MAIN_CATEGORIES);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-800">최근 인사이트</h3>
        <div className="flex space-x-2">
          <select className="px-3 py-1 border rounded-md text-sm">
            <option>모든 카테고리</option>

            {categories.map((cat, idx) => (
              <option key={idx}>{cat}</option>
            ))}
          </select>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            더 보기
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {insightData.map((insight, index) => (
          <InsightItem key={index} insight={insight} />

        ))}
      </div>
    </div>
  );
};
