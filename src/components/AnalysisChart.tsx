import React from 'react';
export const AnalysisChart = () => {
  // In a real app, we would use a charting library like recharts
  // For now, we'll create a visual representation with divs
  const monthlyData = [{
    month: '1월',
    score: 65
  }, {
    month: '2월',
    score: 59
  }, {
    month: '3월',
    score: 70
  }, {
    month: '4월',
    score: 72
  }, {
    month: '5월',
    score: 68
  }, {
    month: '6월',
    score: 74
  }, {
    month: '7월',
    score: 78
  }];
  const maxScore = Math.max(...monthlyData.map(d => d.score));
  return <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
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
      <div className="h-64 flex items-end justify-between pb-5 mb-2">
        {monthlyData.map((item, index) => <div key={index} className="flex flex-col items-center flex-1">
            <div className="w-12 rounded-t-md bg-blue-500" style={{
          height: `${item.score / maxScore * 100}%`,
          backgroundColor: item.score > 70 ? '#4ade80' : item.score > 65 ? '#60a5fa' : '#f87171'
        }} />
            <div className="text-xs mt-2 text-gray-600">{item.month}</div>
            <div className="text-xs font-medium">{item.score}</div>
          </div>)}
      </div>
      <div className="flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
        <div>
          시장 감정 지수:{' '}
          <span className="text-blue-600 font-medium">긍정적 (72/100)</span>
        </div>
        <div>
          전월 대비: <span className="text-green-600 font-medium">+4%</span>
        </div>
      </div>
    </div>;
};