import { StockAnalysis } from "./StockAnalysis";
import { SentimentFeedback } from "./SentimentFeedback";//이거 사용안하는것 같아요 삭제 해도될듯합니다.
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
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AnalysisChart />
          <StockAnalysis />
        </div>
        <div className="space-y-6">
          <TrendingStocks />
        </div>
      </div>
      <RecentInsights />
    </div>
  );
};
