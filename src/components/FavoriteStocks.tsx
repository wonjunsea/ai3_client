import React, { useState } from "react";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";

export interface FavoriteStock {
  name: string;
  code: string;
  change: number;
  sentiment?: string;
}

interface FavoriteStocksProps {
  stocks: FavoriteStock[];
  onDeleteFavorite?: (index: number) => void;
}

export const FavoriteStocks = ({
  stocks,
  onDeleteFavorite,
}: FavoriteStocksProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-bold text-gray-800">관심 종목</h3>
        <button
          className="text-blue-600 text-xs font-medium hover:text-blue-800"
          onClick={handleEditToggle}
        >
          {isEditing ? "완료" : "편집"}
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
            {isEditing && onDeleteFavorite && (
              <button
                className="ml-2 text-red-500 text-xs hover:text-red-700"
                onClick={() => onDeleteFavorite(index)}
              >
                삭제
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
