import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";

export interface FavoriteStock {
  name: string;
  code: string;
  change: number;
  sentiment?: string;
}

interface FavoriteStocksProps {
  stocks: FavoriteStock[];
}

export const FavoriteStocks = ({ stocks }: FavoriteStocksProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-gray-800">관심 종목</h3>
        <button className="text-blue-600 text-xs font-medium hover:text-blue-800">
          편집
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {stocks.map((stock, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm"
          >
            <div>
              <div className="font-medium text-sm">{stock.name}</div>
              <div className="text-xs text-gray-500">{stock.code}</div>
            </div>
            <div
              className={`flex items-center ${
                stock.change > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {stock.change > 0 ? (
                <TrendingUpIcon className="h-4 w-4 mr-1" />
              ) : (
                <TrendingDownIcon className="h-4 w-4 mr-1" />
              )}
              <span className="font-medium text-xs">
                {stock.change > 0 ? "+" : ""}
                {stock.change}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-3 py-2 border border-gray-200 text-gray-600 rounded-md text-xs hover:bg-gray-50">
        종목 추가
      </button>
    </div>
  );
};
