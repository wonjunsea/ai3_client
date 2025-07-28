import { useLocation } from "react-router-dom";

export const ResultPage = () => {
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

    // 점수에 따른 배경색 클래스 결정
    const totalScoreBgClass =
      totalScore >= 80
        ? "bg-blue-100"
        : totalScore >= 60
        ? "bg-blue-50"
        : "bg-blue-50";

    // 점수에 따른 멘트 결정
    let comment = "";
    if (totalScore >= 70) {
      comment = "매수 관심 필요, 단기 반등 기대감, 호재반영가능성";
    } else if (totalScore >= 40) {
      comment = "관망 유지, 시장 반응 제한적, 단기 방향성 모호";
    } else {
      comment =
        "매도 필요, 추가 하락 가능성, 리스크 관리 필요, 단기 조정 가능성";
    }

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl  ">
        {/* 상단 주식 정보 헤더 */}

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{state.name}</h1>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6"></div>

        {/* 점수 세부 분석 섹션 */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">점수 세부 분석</h3>
        <div className="space-y-5 mb-8">
          {/* 투자자 평가 카드 */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-gray-800">투자자 평가</h4>
              <div className="text-2xl font-bold text-blue-600">
                {state.userScore ?? "분석 중..."}
                <span className="text-lg text-gray-500">/20</span>
              </div>
            </div>
          </div>

          {/* 애널리스트 평가 카드 */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-gray-800">
                애널리스트 평가
              </h4>
              <div className="text-2xl font-bold text-blue-600">
                {state.analScore ?? "분석 중..."}
                <span className="text-lg text-gray-500">/40</span>
              </div>
            </div>
          </div>

          {/* 기업 영향도 카드 */}
          <div className="p-5 bg-white border border-gray-200 rounded-xl">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-bold text-gray-800">기업 영향도</h4>
              <div className="text-2xl font-bold text-blue-600">
                {state.influenceScore ?? "분석 중..."}
                <span className="text-lg text-gray-500">/40</span>
              </div>
            </div>
          </div>
        </div>

        {/* 총점 표시 영역 */}
        <div className={`${totalScoreBgClass} rounded-xl p-6 text-center mb-4`}>
          <div className="text-gray-600 font-medium mb-2">총 점수</div>
          <div className="text-5xl font-bold text-blue-700">
            {totalScore}
            <span className="text-3xl text-gray-600">/100</span>
          </div>
        </div>

        {/* 점수에 따른 멘트 출력 */}
        <div className="text-center text-lg font-semibold text-gray-700">
          {comment}
        </div>
      </div>
    );
  }

  // state가 없을 경우
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8 text-center">
      <h2 className="text-2xl text-gray-600">주식 정보를 불러올 수 없습니다</h2>
    </div>
  );
};
