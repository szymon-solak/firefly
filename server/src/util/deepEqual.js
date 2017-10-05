export const deepEqual = (src, comp) => {
  if (
    src === undefined ||
    src === null ||
    comp === undefined ||
    comp === null
  ) return false
  if (Object.getOwnPropertyNames(src).length !== Object.getOwnPropertyNames(comp).length) return false
  return Object.keys(src).every((key) => {
    if (typeof src[key] === 'object') {
      return deepEqual(src[key], comp[key])
    }
    return src[key] === comp[key]
  })
}
