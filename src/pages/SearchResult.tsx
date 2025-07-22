import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingSplash } from "./LoadingSplash";

const dummyData = [
  { id: 1, name: "삼성전자" },
  { id: 2, name: "카카오" },
  { id: 3, name: "네이버" },
];

export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const filtered = dummyData.filter((item) => item.name.includes(query || ""));

  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setLoadingId(id);
  };

  const handleLoadingFinish = () => {
    if (loadingId !== null) {
      navigate(`/detail/${loadingId}`);
    }
  };

  if (loadingId !== null) {
    return <LoadingSplash onFinish={handleLoadingFinish} />;
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
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-md transition hover:bg-blue-50"
          >
            <p className="text-lg font-semibold text-gray-700">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
