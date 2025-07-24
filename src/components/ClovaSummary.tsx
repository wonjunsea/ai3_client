import React, { useState } from 'react';
import axios from 'axios';

interface ClovaSummaryProps {
  text: string;
}

function ClovaSummary({ text }: ClovaSummaryProps) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const callClova = async () => {
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:4000/api/clova-summary', {
        messages: [
          {
            role: 'system',
            content:
              '- 당신은 경제 뉴스 요약 어시스턴트입니다.\n- 전체 요약을 4줄 이하로 먼저 작성하고, 이어서 문단별 요약을 1.2.3. 형식으로 각각 2줄 이하로 작성하세요.',
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
      console.log('Clova 응답:', res.data);//json형식으로 출력하기 위함임
      const content = res.data?.choices?.[0]?.message?.content || '요약 결과 없음';
      setSummary(content);
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      setSummary('요약 요청 실패. 서버 또는 네트워크 오류입니다.');
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>뉴스 요약 결과</h2>
      <button onClick={callClova} disabled={loading || !text}>
        {loading ? '요약 중...' : '요약 요청'}
      </button>
      {!text && (
        <div style={{ color: 'red', marginTop: 8 }}>요약할 텍스트가 없습니다.</div>
      )}
      <pre style={{ whiteSpace: 'pre-wrap', marginTop: '1em' }}>{summary}</pre>
    </div>
  );
}

export default ClovaSummary;
