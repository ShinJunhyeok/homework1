# 과제 : 민속박물관 사이트를 react로 작업하기

-   2024 05 11

    -   컴포넌트 만들기

    -   컴포넌트 분리

    -   데이터 전달 : props

    -   스타일 : SCSS

    -   데이터 객체 : data 만들기

-   컴포넌트 구조

```bash
├── assets
│   ├── css
│   ├── images
│   └── api
│        └── data.js
├── components
│   ├── Header.jsx
│   │     ├── HeaderNav.jsx
│   │     └── HeaderTopMenu.jsx
│   ├── Visual.jsx
│   │     └── VisualBanner.jsx
│   │              └── VisualBannerItem.jsx
│   └── Main.jsx
│   │     ├── MainCon1.jsx
│   │     ├── MainCon2.jsx
│   │     │       └── MainCon2List.jsx
│   │     │                 └── MainCon2Item.jsx
│   │     ├── MainCon3.jsx
│   │     │       └── MainCon3List.jsx
│   │     │                 └── MainCon3Item.jsx
│   │     └── MainCon4.jsx
│   │             ├── MainCon4News.jsx
│   │             │         └── MainCon4NewsItem.jsx
│   │             └── MainCon4Util.jsx
│   │                       └── MainCon4UtilItem.jsx
│   └── Footer.jsx
│        ├── FooterLink.jsx
│        ├── FooterInfo.jsx
│        └── FooterFamily.jsx
└── run.sh
```
