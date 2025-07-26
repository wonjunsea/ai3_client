import { StockAnalysis } from "./StockAnalysis";
import { FavoriteStocks, FavoriteStock } from "./FavoriteStocks";
import { RecentInsights } from "./RecentInsights";
interface DashboardProps {
  favoriteStocks: FavoriteStock[];
  onDeleteFavorite?: (index: number) => void;
}

export const Dashboard = ({
  favoriteStocks,
  onDeleteFavorite,
}: DashboardProps) => {
  return (
    <div className="space-y-4 px-2 pt-2 pb-4">
      <div className="flex flex-col gap-4">
        <FavoriteStocks
          stocks={favoriteStocks}
          onDeleteFavorite={onDeleteFavorite}
        />
        <StockAnalysis />
      </div>
      <RecentInsights />
    </div>
  );
};
