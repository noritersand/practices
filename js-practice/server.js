import express from 'express';
import cors from 'cors';
import {printGetRequestInfo, printPostRequestInfo} from './src/utils.js';
import {upload} from './src/multipart-handler.js';

// express 도움말: https://expressjs.com/ko/4x/api.html
const app = express();
const port = 8900;

// 포트 리스닝
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  console.log('HTML 페이지를 보고 싶으면 yarn live 실행할 것');
});

// REMOVED 정적 파일 서빙... 설정이었는데 라이브 서버로 대체함
// import path from 'path';
// const __dirname = import.meta.dirname;
// const webroot = path.join(__dirname, 'webroot');
// app.use(express.static(webroot));

// DISABLED 모든 출처에 대해 CORS 허용
// app.use(cors());

// 특정 출처만 CORS 허용
var whitelist = ['http://localhost:8800', 'http://127.0.0.1:8800'];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// 모든 요청에 대해 로깅
app.all(':pathSegment', (req, res, next) => {
  console.debug('pathSegment:', req.params.pathSegment);
  req.method === 'GET' ? printGetRequestInfo(req) : printPostRequestInfo(req);
  next();
});

// NOTE 여기까지 서버 기본 설정 ---------------

app.get('/error500.data', (req, res) => {
  res.status(500).send('Something broke!');
});

app.get('/success.data', (req, res) => {
  res.set('Content-Type', 'text/html').end('Everything is okay');
  // res.end()는 res.status(200).end()와 같음
});

app.post('/success.data', (req, res) => {
  res.set('Content-Type', 'text/html').end('Everything is okay');
});

app.get('/success-json.data', (req, res) => {
  res.set('Content-Type', 'application/json').json({message: 'Everything is okay'});
});

app.post('/success-json.data', (req, res) => {
  res.set('Content-Type', 'application/json').json({message: 'Everything is okay'});
});

app.post('/return-my-form-data.data', (req, res) => {
  // 저 위에 express.urlencoded({ extended: true }) 덕분에 폼 데이터도 body로 받을 수 있음.
  // 만약 안되면 Content-Type 헤더가 application/x-www-form-urlencoded인지 확인할 것
  res.json(req.body);
});

app.post('/return-my-request-body.data', (req, res) => {
  res.json(req.body);
});

app.post('/upload-file', upload.single('file'), (req, res) => {
  res.json(req.file);
});

// NOTE 이 아래는 리펙토링 필요(URL 수정 등) ---------------

app.get('/uncategorized/:pathSegment.data', (req, res) => {
  console.debug('pathSegment:', req.params.pathSegment);
  res.json(req.query); // 데이터를 응답할 땐 res.send() 혹은 res.json()
});

app.post('/uncategorized/:pathSegment.data', (req, res) => {
  console.debug('pathSegment:', req.params.pathSegment);
  res.json(req.query);
});

app.post('/:pathSegment.html', (req, res) => {
  console.debug('pathSegment:', req.params.pathSegment);
  res.json(req.body);
});

// 404 처리. 라우트 설정 가장 마지막에 있어야 함
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `요청한 경로가 존재하지 않습니다: ${req.originalUrl}`,
    code: -99,
  });
});
