export const COMPANY_NAMES = {
  SAMSUNG: { name: "삼성물산" },
  CHIPOLE: { name: "치폴레" },
}; // 1. 만약 기사에 회사의 이름이 있는 경우 그 이름이 뜨도록, 객체 형태로 변경하여 키로 회사 구분

export const MAIN_CATEGORIES = {
  INFORMATION_TECHNOLOGY: "정보기술",
  INDUSTRIALS: "산업재",
  SEMICONDUCTOR: "반도체",
  FINANCE: "금융",
  HEALTHCARE: "헬스케어",
  CONSUMER_DISCRETIONARY: "자유소비재",
  AUTOMOTIVE: "자동차",
  MEDIA_ENTERTAINMENT: "미디어&엔터테이먼트",
  MATERIALS: "소재",
  MACHINERY_EQUIPMENT: "기계장비",
  BANK: "은행",
  ENERGY_CHEMICALS: "에너지화학",
  CONSUMER_STAPLES: "필수소비재",
  TRANSPORTATION: "운송",
  CYCLICAL_CONSUMER_GOODS: "경기소비재",
  STEEL: "철강",
  COMMUNICATION_SERVICES: "커뮤니케이션서비스",
  INSURANCE: "보험",
  BROADCASTING_TELECOMMUNICATIONS: "방송통신",
  UTILITIES: "유틸리티",
  CONSTRUCTION: "건설",
  SECURITIES: "증권",
}; // 2. 카테고리 나눈것, KRX 한국거래소 기준, 배열에서 객체로 변경하여 키로 구분

// 3은 ai점수인데 일단은 insightData 안에 property로 넣어두었습니다.
export const AI_EMOTIONS = {
  POSITIVE: "긍정적",
  HOLD: "보류",
  NEGATIVE: "부정적",
}; // 4. AI 평가로 해도 되고 아니면 애널리스트 평가로 하셔도 됩니다., 객체로 변경하여 키로 감정 구분

  