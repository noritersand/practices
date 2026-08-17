# js-testbad

자바스크립트 테스트용 저장소

#### environments

- Node.js

## 초기 설정

```bash
yarn install
```

## package.json 스크립트

- `start`
- `live`
- `test`
- `test:mocha`
- `test:tap`
- `build:jsdoc`
- `preview:jsdoc`

### 로컬 서버 시작

로컬 서버는 백엔드와 프론트로 나뉘어 있음.

```bash
# express 서버 시작
yarn start

# live-server 모듈로 pages 디렉터리 열기
yarn live
```

### jest 유닛 테스트

감시 모드로 실행:

```bash
yarn test
```

테스트 파일 위치는 `src/__tests__/jest/` 아래에 위치함.

🚨 Jest용 테스트 파일은 ESM 적용하면 에러 발생해서 CJS로 작성함.

### Mocha 유닛 테스트

```bash
yarn test:mocha
```

테스트 파일 위치는 `src/__tests__/mocha/` 아래.

### TAP 유닛 테스트

```bash
yarn test:tap
```

테스트 파일 위치는 `src/__tests__/tap/` 아래.

### JSDoc

JSDoc 문서 만들어보기:

```bash
yarn build:jsdoc
```

테스트 파일 위치는 `src/__tests__/jsdoc/` 아래

끗.
