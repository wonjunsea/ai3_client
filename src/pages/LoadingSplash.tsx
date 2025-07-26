interface LoadingSplashProps {
  message?: string;
}

export const LoadingSplash = ({
  message = "AI가 분석중입니다..",
}: LoadingSplashProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="text-center">
        <p className="text-xl font-semibold text-blue-700 mb-4">{message}</p>
        <div className="loader border-t-4 border-blue-700 rounded-full w-12 h-12 animate-spin mx-auto" />
        <p className="text-sm text-blue-600 mt-4">잠시만 기다려주세요...</p>
      </div>
    </div>
  );
};
