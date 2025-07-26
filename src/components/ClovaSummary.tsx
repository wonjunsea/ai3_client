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
              '- 당신은 경제 뉴스 요약 어시스턴트입니다.\n- 전체 요약을 4줄 이하로 먼저 작성하고, 이어서 문단별 요약을 1.2.3. 3문단의 형식으로 각각 2줄 이하로 작성하세요.\n-이 뉴스의 긍부정으로 평가하여여 한줄의 100점 만점의 숫자만을 제공하세요.###형식{점수/100}',
          },
          {
            role: 'user',
            content: text,
          },
        ],
        topP: 0.8,
        temperature: 0.5,
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
