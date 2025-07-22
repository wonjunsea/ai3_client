import { FileTextIcon, ExternalLinkIcon } from "lucide-react";
//태그는 3가지 종류로 구성 되어있음음
// select option에 있는 모든 항목을 mainCategories로 선언
const companyName = ["삼성물산","치폴레"];//1.만약 기사에 회사의 이름이 있는 경우 그 이름이 뜨도록
const mainCategories = [//2.카테고리 나눈것 ,krx 한국거래소 기준
  "정보기술","산업재","반도체","금융","헬스케어","자유소비재","자동차","미디어&엔터테이먼트","소재","기계장비","은행",
  "에너지화학","필수소비재","운송","경기소비재","철강","커뮤니케이션서비스","보험","방송통신","유틸리티","건설","증권"];
//3은 ai점수인데 일단은 insightData 안에 property로 넣어두었습니다.
const aiEmotion = ["긍정적","보류","부정적"];//4.ai평가로 해도되고 아니면 그 애널리스트평가로 하셔도 됩니다.

  export const RecentInsights = () => {
  const insightData = [
    {
      companyName: companyName[0],
      title: "삼성물산, 신정동 1152 재개발 수주…단지명 '목동 래미안 트라메종'",
      mainCategory: mainCategories[0], 
      subCategories: ["건설", "KRX 300"],
      aiEmotion: aiEmotion[0],
      score: 78,
      date: "2025-07-20",
      source: "아시아경제",
    },
    {
      title: "J&J 실적에 바이오株 반등…트럼프發 관세 타격 없다, 그 이유는?[투자360]",
      mainCategory: mainCategories[4], // 예시: "헬스케어"
      subCategories: ["바이오"],
      aiEmotion: aiEmotion[0],
      score: 65,
      date: "2024-07-20",
      source: "해럴드경제",
    },
    {
      title: "‘타코맨’ 트럼프, 車 관세 높일까?…“25%만 지켜도 자동차株 주가 반등”[투자360]",
      mainCategory: mainCategories[6], // 예시: "자동차"
      subCategories: ["자동차","자동차부품"],
      aiEmotion: aiEmotion[1],
      score: 82,
      date: "2024-07-20",
      source: "서울경제",
    },
    {
      companyName: companyName[1],
      title: "치폴레(CMG), 하반기 성장세 가속 기대돼 -BMO",
      mainCategory: mainCategories[12], // 예시: "필수소비재"
      subCategories: ["식품"],
      aiEmotion: aiEmotion[0],
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
            <option>모든 카테고리</option>
            {mainCategories.map((cat, idx) => (
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
                        className={`px-3 py-1 rounded-full ml-1 text-xs font-bold
                          ${insight.aiEmotion === "긍정적"
                            ? "bg-[#d2f5c4] text-green-700"
                            : insight.aiEmotion === "보류"
                            ? "bg-[#fff7b2] text-yellow-700"
                            : "bg-[#ffd6d6] text-red-600"}
                        `}
                        style={{ display: "inline-block" }}
                      >
                        {insight.aiEmotion}
                      </span>
                    )}
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
