import { deepEqual } from '../'

test('It compares object properly', () => {
  expect(
    deepEqual({}, {})
  ).toBe(true)

  expect(
    deepEqual({ a: 1 }, { a: 1 })
  ).toBe(true)

  expect(
    deepEqual({ a: 1 }, { a: 3 })
  ).toBe(false)
})

test('It compares nested objects properly', () => {
  expect(
    deepEqual({ a: { b: 1 } }, { a: { b: 3 } })
  ).toBe(false)

  expect(
    deepEqual({ a: { b: 1 } }, { a: { b: 1 } })
  ).toBe(true)
})
