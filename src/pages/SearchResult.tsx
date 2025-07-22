import { useNavigate, useLocation } from "react-router-dom";

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

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">검색 결과: {query}</h2>
      {filtered.length === 0 && <p>결과가 없습니다.</p>}
      <ul>
        {filtered.map((item) => (
          <li
            key={item.id}
            onClick={() => navigate(`/detail/${item.id}`)}
            className="cursor-pointer hover:text-blue-500"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
