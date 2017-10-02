import weatherIcons from './icons.json'

export const getWeatherIconClass = (id) => {
  if (!id) return ''
  const prefix = 'wi wi-'
  const icon = weatherIcons[id].icon

  if (
    !(id > 699 && id < 800) &&
    !(id > 899 && id < 1000)
  ) {
    return `${prefix}day-${icon}`
  }

  return prefix + icon
}
