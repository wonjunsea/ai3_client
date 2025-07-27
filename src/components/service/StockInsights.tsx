import axios from "axios";
import { Articles } from "../constants/articles";

export const getPosNegScore = async (
  positive: number,
  negative: number
): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `positive와 negative 비율을 분석하여 20점 만점 점수를 숫자로만 반환해주세요. (공식: positive/(positive+negative) * 20)`,
      },
      {
        role: "user",
        content: `positive: ${positive}, negative: ${negative}`,
      },
    ],
  });
  return parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
};

export const getAnalystScore = async (
  analystRating: number
): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `analystRating을 10점 만점 기준으로 40점으로 변환하여 점수(숫자만)로 반환해주세요. (공식: analystRating/10 * 40)`,
      },
      {
        role: "user",
        content: `analystRating: ${analystRating}`,
      },
    ],
  });
  return parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
};

export const getNewsScore = async (newsSummary: string): Promise<number> => {
  const res = await axios.post("http://localhost:4000/api/clova-summary", {
    messages: [
      {
        role: "system",
        content: `newsSummary 내용을 분석하여 40점 만점 점수를 숫자로만 반환해주세요.`,
      },
      {
        role: "user",
        content: `newsSummary: ${newsSummary}`,
      },
    ],
  });
  return parseInt(res.data.result.message.content.match(/\d+/)?.[0] || "0");
};
