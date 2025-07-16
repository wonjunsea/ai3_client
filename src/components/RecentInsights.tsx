import React from 'react';
import { FileTextIcon, ExternalLinkIcon } from 'lucide-react';
export const RecentInsights = () => {
  const insightData = [{
    title: '반도체 시장 회복 조짐, 하반기 실적 개선 전망',
    category: '산업분석',
    score: 78,
    date: '2023-07-15',
    source: '한국경제'
  }, {
    title: '금리 동결 발표에 따른 금융주 영향 분석',
    category: '금융',
    score: 65,
    date: '2023-07-14',
    source: '매일경제'
  }, {
    title: '전기차 배터리 기업 실적 전망 및 투자 전략',
    category: '자동차',
    score: 82,
    date: '2023-07-13',
    source: '서울경제'
  }, {
    title: '바이오 기업 신약 개발 현황 및 시장 전망',
    category: '바이오',
    score: 73,
    date: '2023-07-12',
    source: '헬스조선'
  }];
  return <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-800">최근 인사이트</h3>
        <div className="flex space-x-2">
          <select className="px-3 py-1 border rounded-md text-sm">
            <option>모든 카테고리</option>
            <option>산업분석</option>
            <option>금융</option>
            <option>자동차</option>
            <option>바이오</option>
          </select>
          <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
            더 보기
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {insightData.map((insight, index) => <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex items-start">
              <div className="p-2 bg-blue-50 rounded-lg mr-3">
                <FileTextIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                    {insight.category}
                  </span>
                  <span className={`text-xs font-medium ${insight.score >= 75 ? 'text-green-600' : insight.score >= 60 ? 'text-blue-600' : 'text-red-600'}`}>
                    AI 점수: {insight.score}/100
                  </span>
                </div>
                <h4 className="font-medium mt-2">{insight.title}</h4>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <div>
                    {insight.date} | {insight.source}
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <span className="mr-1">자세히</span>
                    <ExternalLinkIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>)}
      </div>
    </div>;
};