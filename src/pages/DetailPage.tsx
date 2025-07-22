import { useParams } from "react-router-dom";

const dummyData = [
  { id: 1, name: "삼성전자", description: "삼성전자 상세 정보" },
  { id: 2, name: "카카오", description: "카카오 상세 정보" },
  { id: 3, name: "네이버", description: "네이버 상세 정보" },
];

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const item = dummyData.find((d) => d.id === Number(id));

  if (!item)
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        데이터를 찾을 수 없습니다.
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
        {item.name}
      </h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {item.description}
      </p>
    </div>
  );
};
