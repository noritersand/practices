# mybatis-testbed

마이바티스 문법 테스트용 저장소

실행하려면 `/src/main/resources/run/database.properties` 파일을 만들고 다음처럼 데이터베이스 접속 정보를 입력해놔야 함(이 파일은 커밋하지 않음)

```properties
server.url = 'https://어디어디.com'
server.port = 3306
server.database = 'whoami'
user.name = '유zㅓ네임'
user.pswd = '패ss워d'
```

스프링에 의존하지 않고 쿼리 실행과 로깅까지 하는 것이 목표.

대충 필요한 라이브러리는:

- java 17
- mybatis 3.x
- logback
- lombok
- fasterxml.jackson
