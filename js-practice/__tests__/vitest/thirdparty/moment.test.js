/**
 * @file Moment.js 테스트
 *  공식 도움말: https://momentjs.com/docs/
 */

import {expect, test} from 'vitest';
import moment from 'moment';

const now = moment(); // moment(new Date())와 같음

const someday = moment('2024-08-14T14:24:00+09:00');
const anotherDay = moment('2024-08-30T23:59:59+09:00');
const invalidDate = moment(null);

test('Basic usage', () => {
  expect(someday.toString()).toBe('Wed Aug 14 2024 14:24:00 GMT+0900');
  expect(anotherDay.toString()).toBe('Fri Aug 30 2024 23:59:59 GMT+0900');
  expect(invalidDate.toString()).toBe('Invalid date');
});

test('Time from now', () => {
  const fromNow = moment('2024-12-09 13:51:23').fromNow();
  expect(fromNow).toBeDefined();
});

test('Comparison', () => {
  expect(someday.isBefore(anotherDay)).toBe(true);
  expect(anotherDay.isAfter(someday)).toBe(true);
  expect(anotherDay.isSame(someday)).toBe(false);
});

test('Difference', () => {
  expect(someday.diff(anotherDay)).toBe(-1416959000);
  expect(anotherDay.diff(someday)).toBe(1416959000);

  expect(someday.diff(anotherDay, 'milliseconds')).toBe(-1416959000);
  expect(anotherDay.diff(someday, 'milliseconds')).toBe(1416959000);

  expect(someday.diff(anotherDay, 'seconds')).toBe(-1416959);
  expect(anotherDay.diff(someday, 'seconds')).toBe(1416959);

  expect(someday.diff(anotherDay, 'minutes')).toBe(-23615);
  expect(anotherDay.diff(someday, 'minutes')).toBe(23615);

  expect(someday.diff(anotherDay, 'hours')).toBe(-393);
  expect(anotherDay.diff(someday, 'hours')).toBe(393);

  expect(someday.diff(anotherDay, 'days')).toBe(-16);
  expect(anotherDay.diff(someday, 'days')).toBe(16);

  expect(someday.diff(anotherDay, 'months')).toBe(0);
  expect(anotherDay.diff(someday, 'months')).toBe(0);
});

test('Format', () => {
  // Month
  expect(someday.format('M')).toBe('8');
  expect(someday.format('Mo')).toBe('8th');
  expect(someday.format('MM')).toBe('08');
  expect(someday.format('MMM')).toBe('Aug');
  expect(someday.format('MMMM')).toBe('August');

  // Quarter
  expect(someday.format('Q')).toBe('3');
  expect(someday.format('Qo')).toBe('3rd');

  // Day of Month
  expect(someday.format('D')).toBe('14');
  expect(someday.format('Do')).toBe('14th');
  expect(someday.format('DD')).toBe('14');

  // Day of Year
  expect(someday.format('DDD')).toBe('227');
  expect(someday.format('DDDo')).toBe('227th');
  expect(someday.format('DDDD')).toBe('227');

  // Day of Week
  expect(someday.format('d')).toBe('3');
  expect(someday.format('do')).toBe('3rd');
  expect(someday.format('dd')).toBe('We');
  expect(someday.format('ddd')).toBe('Wed');
  expect(someday.format('dddd')).toBe('Wednesday');

  // Day of Week (Locale)
  expect(someday.format('e')).toBe('3');

  // Day of Week (ISO)
  expect(someday.format('E')).toBe('3');

  // Week of Year
  expect(someday.format('w')).toBe('33');
  expect(someday.format('wo')).toBe('33rd');
  expect(someday.format('ww')).toBe('33');

  // Week of Year (ISO)
  expect(someday.format('W')).toBe('33');
  expect(someday.format('Wo')).toBe('33rd');
  expect(someday.format('Ww')).toBe('3333');

  // Year
  expect(someday.format('YY')).toBe('24');
  expect(someday.format('YYYY')).toBe('2024');
  expect(someday.format('YYYYYY')).toBe('+002024');
  expect(someday.format('Y')).toBe('2024');

  // Era Year
  expect(someday.format('y')).toBe('2024');

  // Era
  expect(someday.format('N')).toBe('AD');
  expect(someday.format('NN')).toBe('AD');
  expect(someday.format('NNN')).toBe('AD');
  expect(someday.format('NNNN')).toBe('Anno Domini');
  expect(someday.format('NNNNN')).toBe('AD');

  // Week Year
  expect(someday.format('gg')).toBe('24');
  expect(someday.format('gggg')).toBe('2024');

  // Week Year (ISO)
  expect(someday.format('GG')).toBe('24');
  expect(someday.format('GGGG')).toBe('2024');

  // AM/PM
  expect(someday.format('A')).toBe('PM');
  expect(someday.format('a')).toBe('pm');

  // Hour
  expect(someday.format('H')).toBe('14');
  expect(someday.format('HH')).toBe('14');
  expect(someday.format('h')).toBe('2');
  expect(someday.format('hh')).toBe('02');
  expect(someday.format('k')).toBe('14');
  expect(someday.format('kk')).toBe('14');

  // Minute
  expect(someday.format('m')).toBe('24');
  expect(someday.format('mm')).toBe('24');

  // Second
  expect(someday.format('s')).toBe('0');
  expect(someday.format('ss')).toBe('00');

  // Fractional Second
  expect(someday.format('S')).toBe('0');
  expect(someday.format('SS')).toBe('00');
  expect(someday.format('SSS')).toBe('000');
  expect(someday.format('SSSSSSSSSSSSS')).toBe('0000000000000');

  // Time Zone
  expect(someday.format('z')).toBe('');
  expect(someday.format('zz')).toBe('');
  expect(someday.format('Z')).toBe('+09:00');
  expect(someday.format('ZZ')).toBe('+0900');

  // Unix Timestamp
  expect(someday.format('x')).toBe('1723613040000');

  // Unix Millisecond Timestamp
  expect(someday.format('X')).toBe('1723613040');

  // examples
  expect(someday.format('YYYY-MM-DD HH:mm:ss')).toBe('2024-08-14 14:24:00');
  expect(someday.format('YYYY-MM-DD HH:mm:ss Z')).toBe('2024-08-14 14:24:00 +09:00');
});
