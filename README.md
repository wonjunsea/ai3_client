# AI 주식 수치화 서비스
```plaintext
Stock-Insights-AI-Analyzer/
│
├── index.html                // 웹사이트의 기본 뼈대가 되는 HTML 파일
├── package.json              // 프로젝트 정보와 필요한 라이브러리 목록
├── postcss.config.js         // CSS 전처리(PostCSS) 설정 파일
├── README.md                 // 프로젝트 소개 및 사용법 설명 파일
├── tailwind.config.js        // Tailwind CSS 설정 파일
├── tsconfig.json             // TypeScript 설정 파일
├── tsconfig.node.json        // Node.js용 TypeScript 설정 파일
├── vite.config.ts            // Vite(개발 서버 및 빌드 도구) 설정 파일
│
└── src/                      // 실제 소스코드가 들어있는 폴더
    │
    ├── index.tsx             // 앱의 진입점(시작 파일)
    ├── index.css             // 전체 앱에 적용되는 CSS
    │
    └── components/           // 여러 UI 컴포넌트(화면 조각)들이 모여있는 폴더
        ├── AnalysisChart.tsx       // 분석 차트 컴포넌트
        ├── Dashboard.tsx           // 대시보드(메인 화면) 컴포넌트
        ├── Header.tsx              // 상단 헤더(타이틀바) 컴포넌트
        ├── RecentInsights.tsx      // 최근 인사이트(분석 결과) 컴포넌트
        ├── SentimentFeedback.tsx   // 감정 피드백(분위기 평가) 컴포넌트
        ├── SideNav.tsx             // 사이드 네비게이션(옆 메뉴) 컴포넌트
        ├── StockAnalysis.tsx       // 주식 분석 컴포넌트
        └── TrendingStocks.tsx      // 인기 주식(트렌드) 컴포넌트
```
