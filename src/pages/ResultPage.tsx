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

    // 점수별 투자 의견 설정
    let investmentComment = "";
    let commentClass = "";
    let commentColor = "";

    if (totalScore >= 70) {
      investmentComment = "매수 관심 필요, 단기 반등 기대감, 호재반영가능성";
      commentClass = "from-emerald-400 to-cyan-500";
      commentColor = "text-emerald-700";
    } else if (totalScore >= 40) {
      investmentComment = "관망 유지, 시장 반응 제한적, 단기 방향성 모호";
      commentClass = "from-amber-300 to-orange-400";
      commentColor = "text-amber-700";
    } else {
      investmentComment = "매도 필요, 추가 하락 가능성, 리스크 관리 필요";
      commentClass = "from-rose-400 to-red-500";
      commentColor = "text-rose-700";
    }

    return (
      <div className="max-w-4xl mx-auto p-6 bg-[#f8fafc] min-h-screen">
        <div className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-t-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-white text-center">총 점수</h1>
          <div className="mt-2 h-1 w-24 bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-xl -mt-6 p-6 z-10 relative">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-extrabold text-gray-800">
              {state.name || "종목명"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-2">
            <ScoreCard
              title="투자자 긍/부정평가"
              score={state.userScore}
              max={20}
              color="bg-sky-100 text-sky-800"
            />
            <ScoreCard
              title="애널리스트 평가"
              score={state.analScore}
              max={40}
              color="bg-indigo-100 text-indigo-800"
            />
            <ScoreCard
              title="기업 영향도"
              score={state.influenceScore}
              max={40}
              color="bg-violet-100 text-violet-800"
            />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5">
            <h3 className="text-xl font-bold text-white text-center">
              종합 분석 점수
            </h3>
          </div>

          <div className="p-6">
            <div className="text-center mb-8">
              <div className="inline-block relative my-4">
                <div className="text-5xl font-extrabold text-gray-800 z-10  relative">
                  {totalScore}
                  <span className="text-gray-500 text-xl">/100점</span>
                </div>
                <div className="absolute -inset-4 bg-blue-50 rounded-full z-0"></div>
              </div>

              <div className="mt-4 h-6 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    totalScore >= 70
                      ? "bg-emerald-500"
                      : totalScore >= 40
                      ? "bg-amber-400"
                      : "bg-rose-500"
                  }`}
                  style={{ width: `${totalScore}%` }}
                ></div>
              </div>
            </div>

            <div
              className={`bg-emerald-500 ${commentClass} rounded-xl p-5 text-center shadow-md`}
            >
              <div className="bg-white bg-opacity-90 rounded-lg py-3 px-4">
                <p className={`font-bold text-lg ${commentColor}`}>
                  {investmentComment}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// 점수 카드 컴포넌트
const ScoreCard = ({
  title,
  score,
  max,
  color,
}: {
  title: string;
  score?: number;
  max: number;
  color: string;
}) => (
  <div className={`${color} rounded-xl p-4 shadow-sm text-center`}>
    <h4 className="font-bold mb-2">{title}</h4>
    <div className="text-3xl font-bold mb-2">
      {score ?? "N/A"}
      <span className="text-lg">/{max}</span>
    </div>
    <div className="h-3 bg-white bg-opacity-50 rounded-full overflow-hidden">
      {score && (
        <div
          className={`h-full rounded-full ${
            score >= max * 0.7
              ? "bg-green-500"
              : score >= max * 0.4
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
          style={{ width: `${(score / max) * 100}%` }}
        ></div>
      )}
    </div>
  </div>
);
