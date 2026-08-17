# css-practice

CSS 테스트용 저장소. CSS 작성하기 귀찮아서 중간에 Sass로 바꿨음.

## 실행 방법

```bash
yarn install

# Sass 컴파일
yarn sass:build

# Sass watch 모드로 컴파일
yarn sass:watch

# Sass watch 모드로 컴파일 + live-server 기동 
yarn dev
```

`package.json`에서 `src/styles` 아래에 있는 `.sass` 파일은 `public/pages` 아래에 `.css`로 변환됨.

⚠️ `/public/pages` 아래에 있는 `.css` 파일은 Git 버전 관리 대상에 포함되지 않으니 주의

끗.
