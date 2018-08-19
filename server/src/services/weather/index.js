import { createFetchService } from '../../service'
import { weather as api } from '../../config'

function handleWeatherData(response) {
  const formattedData = {
    name: response.weather[0].main,
    id: response.weather[0].id,
    description: response.weather[0].description,
    temperature: response.main.temp,
    humidity: response.main.humidity,
    wind: response.wind.speed,
  }

  this.setState(formattedData)
}

export const weather = createFetchService({
  name: 'weather',
  attachMethods: [handleWeatherData],
  init() {
    const isProd = process.env.NODE_ENV === 'production'

    /* Do not run this service outside of production
     * as it has low rate limit
     */

    if (isProd) {
      const link = `${api.link}?id=${api.cityId}&APPID=${api.token}&units=metric`

      this.fetch(link, handleWeatherData)
      this.interval(
        () => this.fetch(link, handleWeatherData),
        api.interval
      )
    }
  },
})
