import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingSplash } from "./LoadingSplash";
import {
  callClovaScoreOnly,
  getClovaSummaryText,
} from "../components/ClovaSummary";

const dummyData = [
  {
    id: 1,
    name: "삼성전자",
    newsText:
      "삼성전자는 2025년 7월 9일 미국 뉴욕 브루클린에서 열린 Galaxy Unpacked 행사에서 차세대 AI 기반 인터페이스를 탑재한 Galaxy Z Fold 7과 Galaxy Z Flip 7, 그리고 Galaxy Watch 8 시리즈를 공개했습니다 " +
      "이 중 Fold 7은 펼쳤을 때 두께 4.2mm, 접었을 때 8.9mm로, 무게는 215g에 불과하며 200MP 메인 카메라와 Galaxy AI 기능을 탑재한 프리미엄 기기입니다  ." +
      "또한 삼성디스플레이는 오는 2025년 4분기부터 애플의 첫 폴더블 아이폰용 OLED 패널 생산을 시작할 예정이며, Galaxy Z Fold 7 등 신제품은 7월 25일부터 글로벌 출시가 시작됩니다",
  },
];

export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const filtered = dummyData.filter((item) => item.name.includes(query || ""));

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");

  const handleClick = async (item: (typeof dummyData)[0]) => {
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
        {filtered.map((item) => (
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
