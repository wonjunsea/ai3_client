import { StockAnalysis } from "./StockAnalysis";
import { SentimentFeedback } from "./SentimentFeedback";
import { AnalysisChart } from "./AnalysisChart";
import { TrendingStocks } from "./TrendingStocks";
import { RecentInsights } from "./RecentInsights";
export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-bold text-gray-800">
          주식 인사이트 대시보드
        </h2>
        <div className="flex space-x-2">
          <select className="px-3 py-2 border rounded-md text-sm">
            <option>오늘</option>
            <option>이번 주</option>
            <option>이번 달</option>
            <option>올해</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
            리포트 생성
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AnalysisChart />
          <StockAnalysis />
        </div>
        <div className="space-y-6">
          <TrendingStocks />
          <SentimentFeedback />
        </div>
      </div>
      <RecentInsights />
    </div>
  );
};
