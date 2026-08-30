/**
 * @file Day.js 테스트
 * 공식 도움말: https://day.js.org/docs/en/installation/installation
 */

import {expect, test} from 'vitest';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import toArray from 'dayjs/plugin/toArray';
import toObject from 'dayjs/plugin/toObject';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(toArray);
dayjs.extend(toObject);

test('basic usage', () => {
  const someUTC = dayjs('2024-01-01T00:00:00Z');

  // ℹ️ 'T' 가 있으면 입력 제한이 조금 빡빡한 늭김

  const someKST1 = dayjs('2024-01-01T09'); // ✅
  expect(someKST1.isValid()).true;
  expect(someKST1.isSame(someUTC)).true;

  const someKST2 = dayjs('2024-01-01T09:00+09:00'); // ✅
  expect(someKST2.isValid()).true;
  expect(someKST2.isSame(someUTC)).true;

  const someKST3 = dayjs('2024-01-01T09:00:00+09:00'); // ✅
  expect(someKST3.isValid()).true;
  expect(someKST3.isSame(someUTC)).true;

  const someKST4 = dayjs('2024-01-01T09:00:00.000+09:00'); // ✅
  expect(someKST4.isValid()).true;
  expect(someKST4.isSame(someUTC)).true;

  const someKST5 = dayjs('2024-01-01T09+09:00'); // ❌
  expect(someKST5.isValid()).false;

  const someKST6 = dayjs('2024-01-01T09:00+09'); // ❌
  expect(someKST6.isValid()).false;

  // ℹ️ 'T' 가 없으면 대충 입력해도 알아먹음.

  const someKST7 = dayjs('2024-01-01 09'); // ✅
  expect(someKST7.isValid()).true;
  expect(someKST7.isSame(someUTC)).true;

  const someKST8 = dayjs('2024-01-01 09:00+09'); // ✅
  expect(someKST8.isValid()).true;
  expect(someKST8.isSame(someUTC)).true;

  const someKST9 = dayjs('2024-01-01 09:00:00+09'); // ✅
  expect(someKST9.isValid()).true;
  expect(someKST9.isSame(someUTC)).true;

  const someKST10 = dayjs('2024-01-01 09:00:00.000+09:00'); // ✅
  expect(someKST10.isValid()).true;
  expect(someKST10.isSame(someUTC)).true;

  const someKST11 = dayjs('2024-01-01 09+09'); // ❌ 이건 빼고
  expect(someKST11.isValid()).false;
  expect(someKST11.isSame(someUTC)).false;
});

test('get current time', () => {
  const now = dayjs(); // 오늘, 현재 시각, dayjs(new Date())와 같음
  expect(now.isValid()).true;

  const now2 = dayjs(undefined); // 위와 같음
  expect(now2.isValid()).true;

  const now3 = dayjs(''); // ❌ 이건 아님. Invalid date
  expect(now3.isValid()).false;

  const now4 = dayjs(null); // ❌ 얘도 Invalid date
  expect(now4.isValid()).false;
});

test('Weird, but valid anyway', () => {
  // 이렇게 하면 2025년 13월은 없으니 2026년 1월로 넘어가며, 1월 32일은 없으니 2월 1일이 된다.
  const weirdDay = dayjs('2025-13-32');
  // 알아서 계산함.
  expect(weirdDay.isValid()).true;
  // KST 2026-02-01 00시(UTC로 2026-01-31 15시)
  expect(weirdDay.toISOString()).toBe('2026-01-31T15:00:00.000Z');
  // 뒤에 시간을 붙이면 알아서 계산 못함
  const invalidDate = dayjs('2025-13-32T00:00:00Z');
  expect(invalidDate.isValid()).false;
  expect(invalidDate.toString()).toBe('Invalid Date');
});

test('locale', () => {
  // 로케일은 날짜와 시간을 표시할 때 사용하는 언어와 문화권별 형식을 지정하는 기능이다.
  const someday = dayjs('2024-01-01T00:00:00Z');
  expect(someday.format('dddd, MMMM D, YYYY')).toBe('Monday, January 1, 2024');

  // 🚨 locale() 메서드는 locale/ko 모듈을 불러오지 않으면 작동하지 않음
  expect(someday.locale('ko').format('dddd, MMMM D, YYYY')).toBe('월요일, 1월 1, 2024');
});

test('time zone #1', () => {
  // 타임존은 날짜와 시간의 실제 시간을 특정 시간대(=타임존) 기준으로 조정하는 기능이다.
  // 🚨 .tz() 메서드는 utc 플러그인과 timezone 플러그인이 없으면 작동하지 않음

  // 기본값 설정하기
  // dayjs.tz.setDefault('Asia/Seoul');

  // 한국 시간대 기준으로 dayjs 객체 생성하기
  const someday1 = dayjs('2020-01-01T09:00:00');
  expect(someday1.tz('Asia/Seoul').toISOString()).toBe('2020-01-01T00:00:00.000Z');
  expect(dayjs.tz('2020-01-01T09:00:00', 'Asia/Seoul').toISOString()).toBe('2020-01-01T00:00:00.000Z');
});

test('time zone #2', () => {
  // 사실 .tz() 없어도 기본값으로 해당 국가의 시간대가 적용되므로, 아예 다른 국가에 대응하는 경우가 아니면 굳이 없어도 됨
  // 예를 들어 한국에서 태평양 표준 시간을 입력한다던지
  // 하지만 이 경우에도 2019-12-31T16:00:00-17:00 오프셋을 포함한 문자열로 대체할 수도 있긴 함
  // 그러니까 .tz()는 시간대 관리의 필수는 아니지만, 복잡한 시간대 관리(썸머 타임 적용, 가독성 향상, 다른 시간대로 변환하기)를 쉽게 처리할 수 있다는 데에 의미가 있다.
  expect(dayjs('2020-01-01T09:00:00').toISOString()).toBe('2020-01-01T00:00:00.000Z');
  expect(dayjs('2020-01-01T00:00:00Z').toISOString()).toBe('2020-01-01T00:00:00.000Z');
  expect(dayjs('2020-01-01T09:00:00+09:00').toISOString()).toBe('2020-01-01T00:00:00.000Z');
});

test('unix time', () => {
  const someday = dayjs('1971-01-01T00:00:00Z');
  expect(someday.unix()).toBe(31536000); // seconds
  expect(someday.valueOf()).toBe(31536000000); // milliseconds
});

test('Display', () => {
  const someday = dayjs('2024-08-14T14:24:00+09:00');

  expect(someday.toDate()).toBeInstanceOf(Date);
  expect(someday.toArray()).toEqual(expect.arrayContaining([2024, 7, 14, 14, 24, 0, 0])); // toArray 플러그인 필요
  expect(someday.toJSON()).toBe('2024-08-14T05:24:00.000Z');
  expect(someday.toISOString()).toBe('2024-08-14T05:24:00.000Z');
  expect(someday.toObject()).toEqual(
    expect.objectContaining({
      years: 2024,
      months: 7,
      date: 14,
      hours: 14,
      minutes: 24,
      seconds: 0,
      milliseconds: 0
    })
  ); // toObject 플러그인 필요
  expect(someday.toString()).toBe('Wed, 14 Aug 2024 05:24:00 GMT');
});

test('Validation', () => {
  const invalidDate = dayjs(null);
  expect(invalidDate.isValid()).false;
  expect(invalidDate.toString()).toBe('Invalid Date');
});

test('Query(compare)', () => {
  const someday = dayjs('2024-08-14T14:24:00+09:00');
  const anotherDay = dayjs('2024-08-30T23:59:59+09:00');

  expect(someday.isBefore(anotherDay)).true;

  expect(anotherDay.isAfter(someday)).true;
  expect(anotherDay.isSame(someday)).false;
});

test('Difference', () => {
  const someday = dayjs('2024-08-14T14:24:00+09:00');
  const anotherDay = dayjs('2024-08-30T23:59:59+09:00');

  expect(someday.diff(anotherDay)).toBe(-1416959000);
  expect(anotherDay.diff(someday)).toBe(1416959000);

  expect(someday.diff(anotherDay, 'millisecond')).toBe(-1416959000);
  expect(anotherDay.diff(someday, 'millisecond')).toBe(1416959000);

  expect(someday.diff(anotherDay, 'second')).toBe(-1416959);
  expect(anotherDay.diff(someday, 'second')).toBe(1416959);

  expect(someday.diff(anotherDay, 'minute')).toBe(-23615);
  expect(anotherDay.diff(someday, 'minute')).toBe(23615);

  expect(someday.diff(anotherDay, 'hour')).toBe(-393);
  expect(anotherDay.diff(someday, 'hour')).toBe(393);

  expect(someday.diff(anotherDay, 'day')).toBe(-16);
  expect(anotherDay.diff(someday, 'day')).toBe(16);

  expect(someday.diff(anotherDay, 'month')).toBe(0);
  expect(anotherDay.diff(someday, 'month')).toBe(0);

  // 10분 차이를 비교한다면...
  const someday2 = dayjs('2025-01-01T00:00:00');
  const anotherDay2 = dayjs('2025-01-01T00:10:00');
  // anotherDay2가 10분 느리고
  expect(anotherDay2.diff(someday2, 'minute')).toBe(10);
  // someday2가 10분 빠름
  expect(someday2.diff(anotherDay2, 'minute')).toBe(-10);
});

test('Display-Format', () => {
  const someday = dayjs('2024-08-14T14:24:00+09:00');

  expect(someday.format('YY')).toBe('24'); // Two-digit year
  expect(someday.format('YYYY')).toBe('2024'); // Four-digit year
  expect(someday.format('M')).toBe('8'); // The month, beginning at 1
  expect(someday.format('MM')).toBe('08'); // The month, 2-digits
  expect(someday.format('MMM')).toBe('Aug'); // The abbreviated month name
  expect(someday.format('MMMM')).toBe('August'); // The full month name
  expect(someday.format('D')).toBe('14'); // The day of the month
  expect(someday.format('DD')).toBe('14'); // The day of the month, 2-digits
  expect(someday.format('d')).toBe('3'); // The day of the week, with Sunday as 0
  expect(someday.format('dd')).toBe('We'); // The min name of the day of the week
  expect(someday.format('ddd')).toBe('Wed'); // The short name of the day of the week
  expect(someday.format('dddd')).toBe('Wednesday'); // The name of the day of the week
  expect(someday.format('H')).toBe('14'); // The hour
  expect(someday.format('HH')).toBe('14'); // The hour, 2-digits
  expect(someday.format('h')).toBe('2'); // The hour, 12-hour clock
  expect(someday.format('hh')).toBe('02'); // The hour, 12-hour clock, 2-digits
  expect(someday.format('m')).toBe('24'); // The minute
  expect(someday.format('mm')).toBe('24'); // The minute, 2-digits
  expect(someday.format('s')).toBe('0'); // The second
  expect(someday.format('ss')).toBe('00'); // The second, 2-digits
  expect(someday.format('SSS')).toBe('000'); // The millisecond, 3-digits
  expect(someday.format('Z')).toBe('+09:00'); // The offset from UTC, ±HH:mm
  expect(someday.format('ZZ')).toBe('+0900'); // The offset from UTC, ±HHmm
  expect(someday.format('A')).toBe('PM'); // AM/PM
  expect(someday.format('a')).toBe('pm'); // am/pm

  // examples
  expect(someday.format('YYYY-MM-DD HH:mm:ss')).toBe('2024-08-14 14:24:00');
  expect(someday.format('YYYY-MM-DD HH:mm:ss Z')).toBe('2024-08-14 14:24:00 +09:00');
});
