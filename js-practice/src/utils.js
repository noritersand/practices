/**
 * GET 메서드 전용 요청 정보 출력
 *
 * 4.x 버전의 Request 프로퍼티/메서드 목록:
 * - DOC: https://expressjs.com/ko/4x/api.html#req
 * - Properties:
 *   - req.app
 *   - req.baseUrl
 *   - req.body
 *   - req.cookies
 *   - req.fresh
 *   - req.hostname
 *   - req.ip
 *   - req.ips
 *   - req.method
 *   - req.originalUrl
 *   - req.params
 *   - req.path
 *   - req.protocol
 *   - req.query
 *   - req.route
 *   - req.secure
 *   - req.signedCookies
 *   - req.stale
 *   - req.subdomains
 *   - req.xhr
 * - Methods:
 *   - req.accepts()
 *   - req.acceptsCharsets()
 *   - req.acceptsEncodings()
 *   - req.acceptsLanguages()
 *   - req.get()
 *   - req.is()
 *   - req.param()
 *   - req.range()
 */
export function printGetRequestInfo(req) {
  console.log(generateGreeting());
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.protocol:', req.protocol);
  console.log('req.headers:', req.headers);
  console.log('req.query:', req.query);
  // console.log('req.baseUrl:', req.baseUrl);
  // console.log('req.originalUrl:', req.originalUrl);
  // console.log('req.params:', req.params);
  // console.log('req.route:', req.route);
}

/**
 * POST 메서드 전용 요청 정보 출력
 */
export function printPostRequestInfo(req) {
  console.log(generateGreeting());
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.protocol:', req.protocol);
  console.log('req.headers:', req.headers);
  console.log('req.query:', req.query);
  console.log('req.body:', req.body);
  // console.log('req.baseUrl:', req.baseUrl);
  // console.log('req.originalUrl:', req.originalUrl);
  // console.log('req.params:', req.params);
  // console.log('req.route:', req.route);
}

function generateGreeting() {
  return `------ NEW REQUEST ARRIVED! (${new Date().toISOString()}) ------`;
}
