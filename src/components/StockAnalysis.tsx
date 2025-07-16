import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, InfoIcon } from 'lucide-react';
export const StockAnalysis = () => {
  const stockAnalysis = [{
    name: '삼성전자',
    code: '005930',
    score: 82,
    trend: 'up',
    change: 3.5,
    insight: '반도체 시장 회복 신호로 인한 긍정적 전망'
  }, {
    name: 'SK하이닉스',
    code: '000660',
    score: 76,
    trend: 'up',
    change: 2.1,
    insight: 'AI 반도체 수요 증가로 인한 성장 기대'
  }, {
    name: '현대차',
    code: '005380',
    score: 68,
    trend: 'down',
    change: 1.2,
    insight: '글로벌 공급망 이슈로 인한 생산 차질 우려'
  }, {
    name: '카카오',
    code: '035720',
    score: 71,
    trend: 'up',
    change: 0.8,
    insight: '신규 서비스 출시로 인한 성장 모멘텀 확보'
  }];
  return <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-800">주식 AI 분석</h3>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
          전체보기
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                종목명
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                종목코드
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                AI 점수
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                변동
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                인사이트
              </th>
            </tr>
          </thead>
          <tbody>
            {stockAnalysis.map((stock, index) => <tr key={index} className="hover:bg-gray-50">
                <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {stock.name}
                </td>
                <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                  {stock.code}
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-2 ${stock.score >= 75 ? 'bg-green-100 text-green-800' : stock.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {stock.score}
                    </div>
                    <div className="h-2 w-24 bg-gray-200 rounded-full">
                      <div className={`h-2 rounded-full ${stock.score >= 75 ? 'bg-green-500' : stock.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{
                    width: `${stock.score}%`
                  }} />
                    </div>
                  </div>
                </td>
                <td className="px-3 py-4 whitespace-nowrap">
                  <div className={`flex items-center ${stock.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.trend === 'up' ? <ArrowUpIcon className="h-4 w-4 mr-1" /> : <ArrowDownIcon className="h-4 w-4 mr-1" />}
                    <span>{stock.change}%</span>
                  </div>
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {stock.insight}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};