# Claude Agent SDK Test

Claude Agent SDK 사용방법 테스트 및 샘플

[공식 설명서](https://code.claude.com/docs/en/agent-sdk/overview 'Agent SDK overview')를 보자.

## 폴더 구조

- `examples/`: SDK 기본 사용 예제
- `ui-demo/`: FastAPI 기반 UI 데모

## 시작하기

```powershell
uv sync
uv run python examples/main.py
```

UI 데모는 다음처럼 실행합니다.

```powershell
uv run --directory ui-demo fastapi dev src/ui_demo/main.py
```
