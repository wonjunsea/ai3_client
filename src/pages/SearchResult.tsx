import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingSplash } from "./LoadingSplash";
import {
  callClovaScoreOnly,
  getClovaSummaryText,
} from "../components/ClovaSummary";
import {
  dummyData,
  SearchResultDummyItem,
} from "../components/constants/searchResultDummyData";

export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const filtered = dummyData.filter((item: SearchResultDummyItem) =>
    item.name.includes(query || "")
  );

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleClick = async (item: SearchResultDummyItem) => {
    setLoading(true);
    setLoadingMessage("AI가 뉴스를 분석하고 있습니다...");

    try {
      // 점수 분석 시작
      setLoadingMessage("감정 점수를 계산하고 있습니다...");
      const score = await callClovaScoreOnly(item.newsText);

      // 요약 분석 시작
      setLoadingMessage("뉴스 내용을 요약하고 있습니다...");
      const summary = await getClovaSummaryText(item.newsText);

      // DetailPage로 결과 전달
      navigate(`/detail/${item.id}`, {
        state: {
          name: item.name,
          newsText: item.newsText,
          score,
          summary,
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
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🔍 검색 결과: {query}
      </h2>
      {filtered.length === 0 && (
        <p className="text-gray-500">결과가 없습니다.</p>
      )}
      <div className="flex flex-col gap-4">
        {filtered.map((item: SearchResultDummyItem) => (
          <div
            key={item.id}
            onClick={() => handleClick(item)}
            className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition hover:bg-blue-50"
          >
            <p className="text-lg font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
