import { interval } from '../'

test('Sets up object porperly', () => {
  const i = interval(() => {}, 100000)

  expect(i.interval).not.toBeUndefined()
  expect(i.enable).not.toBeUndefined()
  expect(i.disable).not.toBeUndefined()

  i.disable()
  expect(i.interval).toBe(null)

  i.enable()
  expect(i.interval).not.toBe(null)
})
