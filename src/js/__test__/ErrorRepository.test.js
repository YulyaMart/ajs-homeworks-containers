import ErrorRepository from '../ErrorRepository';

test('checking "Unknown error" returning', () => {
  expect(new ErrorRepository().translate(5)).toBe('Unknown error');
});

test('checking error message according to error code', () => {
  expect(
    new ErrorRepository(
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [402, 'Payment Required'],
    ).translate(400),
  ).toBe('Bad Request');
});
