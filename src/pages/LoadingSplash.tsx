import { useEffect } from "react";

interface LoadingSplashProps {
  onFinish: () => void;
}

export const LoadingSplash = ({ onFinish }: LoadingSplashProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); // 5초 후 실행

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-50">
      <div className="text-center">
        <p className="text-xl font-semibold text-blue-700 mb-4">
          AI가 분석중입니다..
        </p>
        <div className="loader border-t-4 border-blue-700 rounded-full w-12 h-12 animate-spin mx-auto" />
      </div>
    </div>
  );
};
