import React, { useState } from 'react';
import axios from 'axios';

interface ClovaSummaryProps {
  text: string;
  onSummary?: (result: string) => void; //값을 다른 컴포넌트에서도 쓰기 위한 callback function입니다.
}

function ClovaSummary({ text, onSummary }: ClovaSummaryProps) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const callClova = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/api/clova-summary', {
        messages: [
          {
            role: 'system',
            content://이 부분이 hyper-clova에게 보낼 메시지 입니다. 이게 프롬프트 부분입니다.이형식에 따라 응답을 보냅니다.
            '- 당신은 30년동안 경제 뉴스를 요약해온 전문가입니다. \n' +
            '- 독자가 빠르게 요지를 파악할 수 있도록 해주세요\n'+
            '- 반드시 아래 형식을 따르세요:\n' +
            '1. 결론을 한문장으로 요약해서 먼저 제시해주세요\n' +
            '2. 전체 내용을 3문단으로 요약해 주세요. 각 문단 앞에 숫자를 붙여주세요\n' +
            '3. 마지막 줄에 {NN/100} 형식으로 긍부정 기준 평가 점수 작성 (예: {82/100})\n' +
            '- 반드시 위 순서와 형식을 유지할 것\n' +
            '- 예시:결론 한 문장\n문단 1\n문단 2\n문단 3\n{NN/100}'
        },
          {
            role: 'user',
            content: text,
          },
        ],
        topP: 0.9,
        temperature: 0.0,
        repetitionPenalty: 1.1,
        maxTokens: 512,
        includeAiFilters: true,
      });
      const result = res.data.result.message.content;
      setSummary(result);
      if (onSummary) onSummary(result);
    } catch (err: any) {
      setSummary('요약 실패');
      if (onSummary) onSummary('요약 실패');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>뉴스 요약 결과</h2>
      <button onClick={callClova} disabled={loading || !text}>
        {loading ? '요약 중...' : '요약 요청'}
      </button>
      {!text && <div style={{color: 'red', marginTop: 8}}>요약할 텍스트가 없습니다.</div>}
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: '1em' }}>{summary}</pre>
    </div>
  );
}

export default ClovaSummary;
