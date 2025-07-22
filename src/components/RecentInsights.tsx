import { FileTextIcon, ExternalLinkIcon } from "lucide-react";
export const RecentInsights = () => {
  const insightData = [
    {
      title: "삼성물산, 신정동 1152 재개발 수주…단지명 '목동 래미안 트라메종'",
      mainCategory: "산업재",
      subCategories: ["건설","KRX 300"],
      score: 78,
      date: "2025-07-20",
      source: "아시아경제",
    },
    {
      title: "J&J 실적에 바이오株 반등…트럼프發 관세 타격 없다, 그 이유는?[투자360]",
      mainCategory: "헬스케어",
      subCategories: ["바이오"],
      score: 65,
      date: "2024-07-20",
      source: "해럴드경제",
    },
    {
      title: "‘타코맨’ 트럼프, 車 관세 높일까?…“25%만 지켜도 자동차株 주가 반등”[투자360]",
      mainCategory: "자동차",
      subCategories: ["자동차"],
      score: 82,
      date: "2024-07-20",
      source: "서울경제",
    },
    {
      title: "치폴레(CMG), 하반기 성장세 가속 기대돼 -BMO",
      mainCategory: "필수소비재",
      subCategories: ["식품"],
      score: 73,
      date: "2024-07-18",
      source: "연합인포해외",
    },
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-800">최근 인사이트</h3>
        <div className="flex space-x-2">
          <select className="px-3 py-1 border rounded-md text-sm">
            <option>모든 카테고리</option>//krx 300 지수를 바탕으로
            <option>정보기술</option>
            <option>산업재</option>
            <option>반도체</option>
            <option>금융</option>
            <option>헬스케어</option>
            <option>자유소비재</option>
            <option>자동차</option>
            <option>미디어&엔터테이먼트</option>
            <option>소재</option>
            <option>기계장비</option>
            <option>은행</option>
            <option>에너지화학</option>
            <option>필수소비재</option>
            <option>운송</option>
            <option>경기소비재</option>
            <option>철갈</option>
            <option>커뮤니케이션서비스</option>
            <option>보험</option>
            <option>방송통신</option>
            <option>유틸리티</option>
            <option>건설</option>
            <option>증권</option>
          </select>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            더 보기
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {insightData.map((insight, index) => (
          <div
            key={index}
            className="border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <div className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <FileTextIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {insight.mainCategory}
                    </span>
                    {insight.subCategories.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-blue-50 rounded-full text-blue-600"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      insight.score >= 75
                        ? "text-green-600"
                        : insight.score >= 60
                        ? "text-blue-600"
                        : "text-red-600"
                    }`}
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
        ))}
      </div>
    </div>
  );
};
