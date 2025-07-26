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
      "삼성전자, 2분기 영업이익이 전년 대비 최대 56% 급감하며 반도체 경쟁력 저하 우려 확산",
  },
  {
    id: 2,
    name: "카카오",
    newsText:
      "골드만삭스 '매수' 의견 재개, 목표가 85,000원 제시—AI·생성형 모델 기반 사업 확장 기대",
  },
  {
    id: 3,
    name: "네이버",
    newsText:
      "스페인 Wallapop 인수 추진 중, 인수가격 관련 논란↑—주가도 최근 등락 지속",
  },
];

export const SearchResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query");

  const filtered = dummyData.filter((item) => item.name.includes(query || ""));

  const [loading, setLoading] = useState(false);

  const handleClick = async (item: (typeof dummyData)[0]) => {
    setLoading(true);
    try {
      // 점수와 요약을 동시에 호출
      const [score, summary] = await Promise.all([
        callClovaScoreOnly(item.newsText),
        getClovaSummaryText(item.newsText),
      ]);

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
    return <LoadingSplash onFinish={() => {}} />;
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
