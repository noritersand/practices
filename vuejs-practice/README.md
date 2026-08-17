# vuejs-testbad

Vuejs 샘플 코드 저장소 겸 실험실

#### environments

- Vue 3
- Node.js (버전은 웬만하면 다 됨)

## 서버 실행

Node.js [express](https://expressjs.com) 패키지 사용함.

```bash
npm install

npm start
```

시작 후 브라우저로 [http://localhost:9999](http://localhost:9999) 열기

## Node.js 명령어

### 패키지 설치

```bash
npm install

# 의존성 패키지 설치는 yarn으로 해도 무방
yarn install
```

### 서버 시작

```bash
# 서버 시작은 아래 셋 중에 하나로 해도 됨
node server.js

# nodemon으로 서버 시작: 변경된 파일 재시작 없이 갱신
npm exec nodemon server.js
```

## 파일 레이아웃

- `server.js`: 서버 역할을 하는 스크립트입니다.
- `utils.js`: `server.js`에서 참조하는 컴포넌트입니다.
- `public`: 외부 공개 가능한 파일들인 웹 리소스를 저장하는 경로입니다. 여기에 브라우저에서 보고 싶은 HTML, CSS, JavaScript 파일을 저장하면 됩니다.
- `public/index.html`: 인덱스 페이지(혹은 홈페이지)입니다. 본인이 작성한 파일의 링크를 여기에 추가해도 됩니다.

## URL 작동 방식

웹 루트는 `public`으로 지정되어 있으며, `public` 바로 다음의 경로를 URL에서 그대로 사용합니다.

예를 들어 `/public/module-test/module-test.html` 파일의 URL은 `/public`을 제거한 `http://localhost:9999/module-test/module-test.html` 입니다.
