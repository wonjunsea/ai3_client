import { useLocation } from "react-router-dom";

export const DetailPage = () => {
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
      </div>
    );
  }
};
