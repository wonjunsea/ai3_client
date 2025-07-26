import { StockAnalysis } from "./StockAnalysis";

import { TrendingStocks } from "./TrendingStocks";
import { RecentInsights } from "./RecentInsights";
export const Dashboard = () => {
  return (
    <div className="space-y-4 px-2 pt-2 pb-4">
      <div className="flex flex-col gap-4">
        <TrendingStocks />
        <StockAnalysis />
      </div>
      <RecentInsights />
    </div>
  );
};
