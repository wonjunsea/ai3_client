import React from "react";
export const AnalysisChart = () => {
  // 더미 데이터
  const monthlyData = [
    { month: "1월", score: 65 },
    { month: "2월", score: 59 },
    { month: "3월", score: 70 },
    { month: "4월", score: 72 },
    { month: "5월", score: 68 },
    { month: "6월", score: 74 },
    { month: "7월", score: 78 },
  ];
  const maxScore = Math.max(...monthlyData.map((d) => d.score));
  const minScore = Math.min(...monthlyData.map((d) => d.score));

  // SVG 선형 그래프용 계산 (크기 소폭 축소)
  const width = 400;
  const height = 150;
  const padding = 28;
  const points = monthlyData.map((item, i) => {
    const x = padding + (i * (width - 2 * padding)) / (monthlyData.length - 1);
    // y축은 값이 클수록 위로 가야 하므로 반전
    const y =
      padding +
      ((maxScore - item.score) * (height - 2 * padding)) /
        (maxScore - minScore || 1);
    return { x, y, value: item.score, month: item.month };
  });
  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-800">
          시장 인사이트 점수 추이
        </h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md">
            일간
          </button>
          <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">
            월간
          </button>
          <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md">
            연간
          </button>
        </div>
      </div>
      {/* 선형(꺾은선) 그래프 */}
      <div className="w-full flex justify-center mb-4">
        <svg width={width} height={height}>
          {/* 축 라인 */}
          <line
            x1={padding}
            y1={height - padding}
            x2={width - padding}
            y2={height - padding}
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          {/* y축 라벨 (최대/최소) */}
          <text
            x={padding - 10}
            y={padding + 5}
            fontSize="12"
            fill="#64748b"
            textAnchor="end"
          >
            {maxScore}
          </text>
          <text
            x={padding - 10}
            y={height - padding + 5}
            fontSize="12"
            fill="#64748b"
            textAnchor="end"
          >
            {minScore}
          </text>
          {/* x축 월 라벨 */}
          {points.map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={height - padding + 18}
              fontSize="12"
              fill="#334155"
              textAnchor="middle"
            >
              {p.month}
            </text>
          ))}
          {/* 꺾은선 */}
          <path d={linePath} fill="none" stroke="#2563eb" strokeWidth="3" />
          {/* 점과 값 */}
          {points.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={6}
                fill="#2563eb"
                stroke="#fff"
                strokeWidth="1.5"
              />
              <text
                x={p.x}
                y={p.y - 10}
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#2563eb"
              >
                {p.value}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <div className="flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
        <div>
          시장 감정 지수:{" "}
          <span className="text-blue-600 font-medium">긍정적 (72/100)</span>
        </div>
        <div>
          전월 대비: <span className="text-green-600 font-medium">+4%</span>
        </div>
      </div>
    </div>
  );
};
