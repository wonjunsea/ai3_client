import axios from "axios";

//1번 함수 입니다.이건 점수만 뽑아서 줍니다. 그 쓰실 때 점수만 뽑아서 쓰시면 됩니다.맨처음 진입점에서 써서 이거 삭제하시면 안됩니다.
export const callClovaScoreOnly = async (
  text: string
): Promise<number | null> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content:
          "- 당신은 30년동안 경제 뉴스를 요약해온 전문가입니다. \n" +
          "- 독자가 빠르게 요지를 파악할 수 있도록 해주세요\n" +
          "- 반드시 아래 형식을 따르세요:\n" +
          "1. 결론을 한문장으로 요약해서 먼저 제시해주세요\n" +
          "2. 전체 내용을 3문단으로 요약해 주세요. 각 문단 앞에 숫자를 붙여주세요\n" +
          "3. 마지막 줄에 {NN/100} 형식으로 긍부정 기준 평가 점수 작성 (예: {82/100})\n" +
          "- 반드시 위 순서와 형식을 유지할 것\n" +
          "- 예시:결론 한 문장\n문단 1\n문단 2\n문단 3\n{NN/100}",
      },
      {
        role: "user",
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
  const match = result.match(/\{(\d+)\/100\}/);
  return match ? parseInt(match[1], 10) : null;
};

// 요약 텍스트만 반환하는 함수 추가
export const getClovaSummaryText = async (text: string): Promise<string> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: "원문을 3문장으로 줄글 형태로 요약해줘",
      },
      {
        role: "user",
        content: text,
      },
    ],
    topP: 0.9,
    temperature: 0.0,
    repetitionPenalty: 1.1,
    maxTokens: 512,
    includeAiFilters: true,
  });
  return res.data.result.message.content;
};
