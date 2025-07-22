//이 컴포넌트 사용 안하는것 같아서 삭제 해도될꺼 같아요
import { SmileIcon, MehIcon, FrownIcon, MessageSquareIcon } from "lucide-react";
export const SentimentFeedback = () => {
  const sentimentData = [
    {
      type: "긍정적",
      count: 65,
      icon: <SmileIcon className="h-5 w-5 text-green-500" />,
    },
    {
      type: "중립적",
      count: 23,
      icon: <MehIcon className="h-5 w-5 text-yellow-500" />,
    },
    {
      type: "부정적",
      count: 12,
      icon: <FrownIcon className="h-5 w-5 text-red-500" />,
    },
  ];
  const recentFeedback = [
    {
      text: "삼성전자 실적 예상보다 좋네요!",
      sentiment: "positive",
      time: "방금 전",
    },
    {
      text: "KOSPI 하락세가 계속되는 것 같아 우려됩니다.",
      sentiment: "negative",
      time: "10분 전",
    },
    {
      text: "신규 상장 종목 어떻게 생각하시나요?",
      sentiment: "neutral",
      time: "30분 전",
    },
  ];
  return (
    <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4">사용자 감정 분석</h3>
      <div className="grid grid-cols-3 gap-2 mb-6">
        {sentimentData.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="flex justify-center mb-1">{item.icon}</div>
            <div className="text-xl font-bold">{item.count}%</div>
            <div className="text-xs text-gray-500">{item.type}</div>
          </div>
        ))}
      </div>
      <h4 className="font-medium text-gray-700 mb-3">최근 피드백</h4>
      <div className="space-y-3">
        {recentFeedback.map((feedback, index) => (
          <div
            key={index}
            className="flex items-start p-2 border-b border-gray-100"
          >
            <div
              className={`p-1.5 rounded-full mr-2 ${
                feedback.sentiment === "positive"
                  ? "bg-green-100"
                  : feedback.sentiment === "negative"
                  ? "bg-red-100"
                  : "bg-yellow-100"
              }`}
            >
              <MessageSquareIcon
                className={`h-4 w-4 ${
                  feedback.sentiment === "positive"
                    ? "text-green-500"
                    : feedback.sentiment === "negative"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm">{feedback.text}</p>
              <p className="text-xs text-gray-500">{feedback.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button className="w-full py-2 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200">
          더 보기
        </button>
      </div>
    </div>
  );
};
