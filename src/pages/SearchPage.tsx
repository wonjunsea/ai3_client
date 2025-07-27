import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingSplash } from "./LoadingPage";

import { Articles, articleData } from "../components/constants/articles";

import { FavoriteStock } from "../components/FavoriteStocks";
import { StockScores } from "../components/service/StockInsights";

interface SearchResultProps {
  onAddFavorite: (stock: FavoriteStock) => void;
  favoriteStocks: FavoriteStock[];
  onDeleteFavorite: (index: number) => void;
}

export const SearchResult = ({
  onAddFavorite,
  favoriteStocks,
}: SearchResultProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const filtered = articleData.filter((item: Articles) =>
    item.name.includes(query || "")
  );

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleClick = async (item: Articles) => {
    setLoading(true);
    setLoadingMessage("AI가 뉴스를 분석하고 있습니다...");

    try {
      // 점수 분석 시작
      setLoadingMessage("감정 점수를 계산하고 있습니다...");
      const score = await StockScores(item);

      // DetailPage로 결과 전달
      navigate(`/detail/${item.id}`, {
        state: {
          name: item.name,
          newsText: item.newsSummary,
          score,
        },
      });
    } catch (error) {
      console.error("API 호출 실패:", error);
      alert("분석 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSplash message={loadingMessage} />;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          🔍 검색 결과: {query}
        </h2>
      </div>
      {filtered.length === 0 && (
        <p className="text-gray-500">결과가 없습니다.</p>
      )}
      <div className="flex flex-col gap-4 mt-4">
        {filtered.map((item: Articles) => {
          const isFavorite = favoriteStocks.some(
            (stock) => stock.name === item.name
          );
          return (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition hover:bg-blue-50 flex items-center justify-between"
            >
              <div className="cursor-pointer" onClick={() => handleClick(item)}>
                <p className="text-lg font-semibold text-gray-700">
                  {item.name}
                </p>
              </div>
              <button
                className={`ml-4 px-2 py-1 text-xs rounded border ${
                  isFavorite
                    ? "bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"
                }`}
                disabled={isFavorite}
                onClick={() => {
                  if (!isFavorite) {
                    onAddFavorite({
                      name: item.name,
                      code: "", // 실제 코드가 있다면 여기에 할당
                      change: 0, // 실제 변동률이 있다면 여기에 할당
                    });
                  }
                }}
              >
                {isFavorite ? "추가됨" : "즐겨찾기 추가"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
