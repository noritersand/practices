/**
 * @file classes 문법 테스트
 */

import {expect, test} from 'vitest';
import Newbie from './classes1';

test('should create a new instance with the given properties', () => {
  const publicName = 'John Doe';
  const privateName = 'John';
  const age = 25;
  const newbie = new Newbie({publicName, privateName, age});

  expect(newbie).toBeInstanceOf(Newbie);
  expect(newbie.publicName).toBe(publicName);
  expect(newbie.privateName).toBe(privateName);
  expect(newbie.age).toBe(age);
});

test('should create a new instance with default empty properties', () => {
  const newbie = new Newbie();

  expect(newbie).toBeInstanceOf(Newbie);
  expect(newbie.publicName).toBeUndefined();
  expect(newbie.privateName).toBeUndefined();
  expect(newbie.age).toBeUndefined();
});

test('should get and set the public name', () => {
  const newbie = new Newbie({publicName: 'John'});
  expect(newbie.publicName).toBe('John');

  newbie.publicName = 'Jane';
  expect(newbie.publicName).toBe('Jane');
});

test('should get and set the private name', () => {
  const newbie = new Newbie({privateName: 'John'});
  expect(newbie.privateName).toBe('John');

  newbie.privateName = 'Jane';
  expect(newbie.privateName).toBe('Jane');
});

test('should get and set the age', () => {
  const newbie = new Newbie({age: 25});
  expect(newbie.age).toBe(25);

  newbie.age = 30;
  expect(newbie.age).toBe(30);
});
