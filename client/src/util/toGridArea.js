import { charIndex } from './'

export const toGridArea = (position) => {
  const [from, to = null] = position.toLowerCase().split(':')

  const gridFrom = `${from[1]} / ${charIndex(from[0])}`

  return to
    ? `${gridFrom} / ${Number(to[1]) + 1} / ${charIndex(to[0]) + 1}`
    : gridFrom
}
