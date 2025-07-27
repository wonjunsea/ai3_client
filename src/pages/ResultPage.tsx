import { useLocation } from "react-router-dom";

export const DetailPage = () => {
  const location = useLocation();
  const state = location.state as {
    name?: string;
    analScore?: number;
    userScore?: number;
    influenceScore?: number;
  };

  if (state) {
    const totalScore =
      (state.analScore || 0) +
      (state.userScore || 0) +
      (state.influenceScore || 0);

    return (
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6"></h2>

        {/* 점수 표시 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-2">{state.name}</h3>
          <div className="text-lg text-blue-600 mb-2">
            감정 점수: {state.userScore ?? "분석 중..."} / 20
          </div>
          <div className="text-lg text-blue-600 mb-2">
            애널리스트 평가: {state.analScore ?? "분석 중..."} / 40
          </div>
          <div className="text-lg text-blue-600 mb-2">
            기업 영향도: {state.influenceScore ?? "분석 중..."} / 40
          </div>
          <div className="text-2xl font-bold text-blue-600">
            총점: {totalScore}/100
          </div>
        </div>
      </div>
    );
  }
};
