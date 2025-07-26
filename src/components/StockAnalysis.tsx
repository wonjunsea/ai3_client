import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
export const StockAnalysis = () => {
  const stockAnalysis = [
    {
      name: "삼성전자",
      code: "005930",
      score: 82,
      trend: "up",
      change: 3.5,
      insight: "반도체 시장 회복 신호로 인한 긍정적 전망",
    },
    {
      name: "SK하이닉스",
      code: "000660",
      score: 76,
      trend: "up",
      change: 2.1,
      insight: "AI 반도체 수요 증가로 인한 성장 기대",
    },
    {
      name: "현대차",
      code: "005380",
      score: 68,
      trend: "down",
      change: 1.2,
      insight: "글로벌 공급망 이슈로 인한 생산 차질 우려",
    },
    {
      name: "카카오",
      code: "035720",
      score: 71,
      trend: "up",
      change: 0.8,
      insight: "신규 서비스 출시로 인한 성장 모멘텀 확보",
    },
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-gray-800">주식 AI 분석</h3>
        <button className="text-blue-600 text-xs font-medium hover:text-blue-800">
          전체보기
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {stockAnalysis.map((stock, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mr-3 text-lg font-bold ${
                stock.score >= 75
                  ? "bg-green-100 text-green-800"
                  : stock.score >= 60
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {stock.score}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 text-sm">
                  {stock.name}
                </span>
                <span className="text-xs text-gray-500">{stock.code}</span>
                <span
                  className={`flex items-center ml-2 text-xs font-semibold ${
                    stock.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stock.trend === "up" ? (
                    <ArrowUpIcon className="h-3 w-3 mr-0.5" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 mr-0.5" />
                  )}
                  {stock.change}%
                </span>
              </div>
              <div className="text-xs text-gray-600 mt-1">{stock.insight}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
