/**
 * @file
 *  <p>쿠키 추가/삭제/조회 프로토타입 생성 파일</p>
 * @author fixalot
 * @since 2023-08-22
 */

/**
 * <p>Cook 제임스 쿡 선장과 관계 없음.</p>
 * <p>원본 작성자: fusionchess from MDN</p>
 *
 * usages:
 * - Cook.setItem({key: 'foo', value: 'bar', sameSite: 'strict'});
 * - Cook.setItem({key: 'numeric', value: 123, sameSite: 'strict', path: '/', domain: 'localhost'});
 * - Cook.setItem({key: 'secret', value: 'shhhh', sameSite: 'none', secure: true});
 */
class Cook {
  constructor() {}

  static getItem(sKey) {
    if (!sKey) {
      return null;
    }
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
              '\\s*\\=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      ) || null
    );
  }

  /**
   * 쿠키 추가
   *
   * @param {Object} obj
   * @param {string} obj.key 추가할 쿠키의 이름
   * @param {string} obj.value 추가할 쿠키의 값
   * @param {string} obj.sameSite SameSite 설정. 허용 범위는 lax|strict|none
   * @param {number|string|Date} obj.expires 쿠키 만료 시간
   * @param {string} obj.path path(도메인 이후의 경로 중 queryString과 hash가 아닌 것)
   * @param {string} obj.domain 도메인
   * @param {boolean} obj.secure secure 쿠키인지
   */
  static setItem({
    key: sKey,
    value: sValue,
    sameSite: sSamesite,
    expire: vEnd,
    path: sPath,
    domain: sDomain,
    secure: bSecure
  }) {
    if (!sSamesite || !/^lax$|^strict$|^none$/.test((sSamesite = sSamesite.toLowerCase()))) {
      console.error('sameSite 값이 없거나 허용 범위가 아닙니다.');
      return false;
    }
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      console.error('key 값이 없거나 허용 범위가 아닙니다.');
      return false;
    }
    if (sSamesite.toLowerCase() == 'none') {
      bSecure = true;
    }
    var sExpires = '';
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires =
            vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
          break;
        case String:
          sExpires = '; expires=' + vEnd;
          break;
        case Date:
          sExpires = '; expires=' + vEnd.toUTCString();
          break;
      }
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=' +
      encodeURIComponent(sValue) +
      '; samesite=' +
      sSamesite +
      sExpires +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '') +
      (bSecure ? '; secure' : '');
    return true;
  }

  /**
   * 쿠키 삭제
   *
   * @param {Object} obj
   * @param {string} obj.key 삭제할 쿠키 이름
   * @param {string} obj.path 삭제할 쿠키의 path
   * @param {string} obj.domain 삭제할 쿠키의 도메인
   */
  static removeItem({key: sKey, path: sPath, domain: sDomain}) {
    if (!this.hasItem(sKey)) {
      console.error('key 값이 없습니다.');
      return false;
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '');
    return true;
  }

  static hasItem(sKey) {
    if (!sKey) {
      return false;
    }
    return new RegExp(
      '(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\='
    ).test(document.cookie);
  }

  static keys() {
    var aKeys = document.cookie
      .replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '')
      .split(/\s*(?:\=[^;]*)?;\s*/);
    if (aKeys.length === 1 && aKeys[0] === '') {
      return [];
    }
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
  }
}
