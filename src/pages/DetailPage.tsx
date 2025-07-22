import { useParams } from "react-router-dom";

const dummyData = [
  { id: 1, name: "삼성전자", description: "삼성전자 상세 정보" },
  { id: 2, name: "카카오", description: "카카오 상세 정보" },
  { id: 3, name: "네이버", description: "네이버 상세 정보" },
];

export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const item = dummyData.find((d) => d.id === Number(id));

  if (!item) return <p>데이터를 찾을 수 없습니다.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <p className="mt-4">{item.description}</p>
    </div>
  );
};
