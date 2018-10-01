export const charIndex = (char) => {
  // 96 => 'a'
  const index = char.toLowerCase().charCodeAt(0) - 96
  return index < 1 ? 1 : index
}
