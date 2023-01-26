import Validator from '../app';

test('False, если первый символ - цифра', () => {
  const received = new Validator('1abc');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если первый символ - "-"', () => {
  const received = new Validator('-abc');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если первый символ - "_"', () => {
  const received = new Validator('_abc');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если последний символ - цифра', () => {
  const received = new Validator('abc1');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если последний символ - "-"', () => {
  const received = new Validator('abc-');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если последний символ - "_"', () => {
  const received = new Validator('abc_');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если имя содержит подряд более 3 цифр', () => {
  const received = new Validator('ab1234cd');

  expect(received.validateUsername()).toBeFalsy();
});

test('False, если имя содержит недопустимые знаки', () => {
  const received = new Validator('ab!cd');

  expect(received.validateUsername()).toBeFalsy();
});

test.each([
  [
    'aBcd',
  ],
  [
    'ab-1cd',
  ],
  [
    'ab1_cd',
  ],
  [
    'a2b2C2d2f2z',
  ],
  [
    'ab-1_a-22cd',
  ],
])('True, если имя соответствует правилам', (input) => {
  const received = new Validator(input);

  expect(received.validateUsername()).toBeTruthy();
});
