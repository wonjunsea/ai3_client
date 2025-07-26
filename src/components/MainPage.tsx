import { StockAnalysis } from "./StockAnalysis";
import { FavoriteStocks, FavoriteStock } from "./FavoriteStocks";
import { RecentInsights } from "./RecentInsights";
interface DashboardProps {
  favoriteStocks: FavoriteStock[];
}

export const Dashboard = ({ favoriteStocks }: DashboardProps) => {
  return (
    <div className="space-y-4 px-2 pt-2 pb-4">
      <div className="flex flex-col gap-4">
        <FavoriteStocks stocks={favoriteStocks} />
        <StockAnalysis />
      </div>
      <RecentInsights />
    </div>
  );
};
