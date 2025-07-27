export interface Articles {
  id: number;
  name: string;
  positive: number;
  negative: number;
  analystRating: number;
  newsSummary: string;
}

export const articleData: Articles[] = [
  {
    id: 1,
    name: "삼성전자",
    positive: 8,
    negative: 2,
    analystRating: 8,
    newsSummary:
      "“이재용 ‘10년 사법리스크’ 족쇄 벗었다…삼성, ‘이재용판 뉴삼성’ 본격 시동”\n\n" +
      "대법원이 2025년 7월 17일에 이재용 회장의 ‘부당합병·회계부정’ 혐의에 대해 무죄를 확정했습니다.\n\n" +
      "이로써 삼성그룹은 오랫동안 이어져온 리더십 리스크에서 벗어나며, 향후 M&A, 대규모 투자, 그룹 혁신 등을 본격화할 것이라는 기대가 커지고 있습니다.",
  },
];
