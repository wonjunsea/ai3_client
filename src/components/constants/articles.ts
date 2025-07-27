export interface Articles {
  id: number;
  name: string;
  positive: number;
  negative: number;
  analystRating: number; // 0~10
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
  {
    id: 2,
    name: "SK하이닉스",
    positive: 15,
    negative: 3,
    analystRating: 9,
    newsSummary:
      "HBM4 양산 로드맵이 시장 기대를 상회했고, 주요 빅테크와의 장기 공급 계약 확대가 확인되었습니다.\n" +
      "AI 수요 견조로 메모리 사이클 업사이클이 이어질 것이란 전망이 강화되었습니다.",
  },
  {
    id: 3,
    name: "LG에너지솔루션",
    positive: 4,
    negative: 9,
    analystRating: 5,
    newsSummary:
      "미국 IRA(인플레이션 감축법) 세액공제 축소 가능성이 거론되며 수익성 둔화 우려가 부각되었습니다.\n" +
      "다만 원가 절감과 신규 고객사 확보 전략으로 하방을 방어할 수 있다는 분석도 있습니다.",
  },
  {
    id: 4,
    name: "현대차",
    positive: 9,
    negative: 4,
    analystRating: 8,
    newsSummary:
      "전기차(EV) 가격 인하에도 불구하고 믹스 개선과 고수익 차종 판매가 이어지며 이익 방어에 성공했다는 평가입니다.\n" +
      "자율주행/로보택시 분야의 중장기 성장 스토리가 재부각되고 있습니다.",
  },
  {
    id: 5,
    name: "카카오",
    positive: 3,
    negative: 11,
    analystRating: 4,
    newsSummary:
      "톡비즈 성장 둔화와 구조조정 이슈가 지속되며 실적 모멘텀 부재가 지적되고 있습니다.\n" +
      "신사업(픽코마, 엔터) 분할 및 재편 가능성은 중장기 리레이팅 트리거로 거론됩니다.",
  },
  {
    id: 6,
    name: "NAVER",
    positive: 11,
    negative: 2,
    analystRating: 8,
    newsSummary:
      "클로바X 2.0 공개와 함께 생성형 AI 기반 검색/쇼핑/광고의 수익화 로드맵이 명확해졌다는 평가입니다.\n" +
      "검색 광고와 커머스 부문의 견조한 성장도 긍정적으로 반영되었습니다.",
  },
  {
    id: 7,
    name: "두산에너빌리티",
    positive: 10,
    negative: 3,
    analystRating: 7,
    newsSummary:
      "소형모듈원전(SMR) 관련 글로벌 파트너십 확대 기대가 커지고 있습니다.\n" +
      "해외 플랜트 수주 파이프라인도 점차 가시화되고 있다는 분석입니다.",
  },
  {
    id: 8,
    name: "HMM",
    positive: 12,
    negative: 1,
    analystRating: 8,
    newsSummary:
      "글로벌 해상 운임지수 급등과 함께 단기 실적 서프라이즈 가능성이 제기되고 있습니다.\n" +
      "다만 고운임 국면의 지속성에 대한 의견은 갈립니다.",
  },
  {
    id: 9,
    name: "포스코퓨처엠",
    positive: 13,
    negative: 2,
    analystRating: 8,
    newsSummary:
      "해외 완성차 업체와의 대형 양극재 장기공급 계약 체결 소식으로 밸류에이션 재평가 기대가 커졌습니다.\n" +
      "니켈/리튬 가격 변동성은 리스크로 지목됩니다.",
  },
  {
    id: 10,
    name: "에코프로비엠",
    positive: 5,
    negative: 9,
    analystRating: 5,
    newsSummary:
      "NCA 계열 수요 둔화와 고객사 조정 이슈로 실적 하향 조정 우려가 반영되었습니다.\n" +
      "다만 기술 경쟁력과 수율 개선에 기반한 중장기 회복 가능성은 유효하다는 시각도 존재합니다.",
  },
  {
    id: 11,
    name: "셀트리온",
    positive: 14,
    negative: 2,
    analystRating: 9,
    newsSummary:
      "주요 바이오시밀러의 글로벌 판매 호조와 램시마SC 미국 승인(가정)으로 파이프라인 가치가 상향 평가되고 있습니다.\n" +
      "합병 이후 비용 효율화로 마진 개선도 기대됩니다.",
  },
];
