import { useParams, useLocation } from "react-router-dom";

const dummyData = [
  { id: 1, name: "삼성전자", description: "삼성전자 상세 정보" },
  { id: 2, name: "카카오", description: "카카오 상세 정보" },
  { id: 3, name: "네이버", description: "네이버 상세 정보" },
];

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const state = location.state as {
    name?: string;
    newsText?: string;
    score?: number;
    summary?: string;
  };

  // state가 있으면 분석 결과를 표시, 없으면 기존 dummyData 사용
  if (state) {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6">
          {state.name}
        </h2>

        {/* 점수 표시 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-2">📊 분석 점수</h3>
          <div className="text-2xl font-bold text-blue-600">
            {state.score !== null && state.score !== undefined
              ? `${state.score}/100`
              : "분석 중..."}
          </div>
        </div>

        {/* 요약 표시 */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">📝 AI 요약</h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed">
              {state.summary || "요약을 불러오는 중..."}
            </pre>
          </div>
        </div>

        {/* 원문 표시 */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">📰 원문</h3>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 leading-relaxed">{state.newsText}</p>
          </div>
        </div>
      </div>
    );
  }

  // 기존 로직 (state가 없는 경우)
  const item = dummyData.find((d) => d.id === Number(id));

  if (!item)
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        데이터를 찾을 수 없습니다.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
        {item.name}
      </h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {item.description}
      </p>
    </div>
  );
};
