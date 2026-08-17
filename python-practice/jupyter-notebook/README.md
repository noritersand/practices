# Jupyter Notebook 주피터 노트북

Jupyter는 코드를 셀 단위로 실행하고 결과와 문서를 통합 관리하는 대화형 개발 환경(IDE)을 말한다. 본래 웹 서버 기반 도구지만 PyCharm을 쓰면 별도로 Jupyter 서비스를 띄울 필요가 없다. PyCharm 자체에 UI가 내장되어 있어 백그라운드에서 코드를 실행할 핵심 패키지([ipykernel](https://pypi.org/project/ipykernel/))만 연결해 주면 기존 PyCharm 환경에서 Jupyter의 핵심 기능을 그대로 사용할 수 있다.

Notebook은 코드, 마크다운 설명, 실행 결과가 하나의 파이프라인으로 저장되는 JSON 기반 파일 포맷(`.ipynb`)이다. 독자적인 표준 파일 형식이어서 PyCharm 프로젝트 안에서도 파일만 생성하면 즉시 전용 에디터가 열려. PyCharm이 제공하는 코드 자동 완성 및 디버깅 기능과 notebook의 셀 단위 빠른 실행 테스팅 장점을 한 환경에서 동시에 활용할 수 있다.

Jupyter 프로젝트의 원래 이름이 IPython Notebook이었기 때문에 `.ipynb` 파일 확장자를 사용한다. 이후 Python뿐만 아니라 Julia, R 등 다른 프로그래밍 언어로 영역이 넓어지면서 프로젝트 이름은 Jupyter로 바뀌었지만, 기존 시스템과의 호환성을 유지하기 위해 파일 확장자는 여전히 `.ipynb`를 그대로 쓰고 있다.

ℹ️ `.ipynb`의 `i`는 interactive
