import { pipe } from '../'

// Helpers

const double = x => x * 2
const plusThree = x => x + 3
const half = x => x / 2

test('It passes the argument in correct order', () => {
  expect(
    pipe(
      plusThree,
      half,
      double
    )(5)
  ).toBe(8)
})
