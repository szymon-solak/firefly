import { createFetchService } from '../../service'
import { news as api } from '../../config'

function handleNewsData(response) {
  if (response.status !== 'ok') return

  const newsData = { articles: response.articles.slice(0, api.limit) }
  this.setState(newsData)
}

export const news = createFetchService({
  name: 'news',
  attachMethods: [handleNewsData],
  init() {
    const link = `${api.link}?source=${api.source}&sortBy=top&apiKey=${api.token}`

    this.fetch(link, handleNewsData)
    this.interval(
      () => this.fetch(link, handleNewsData),
      api.interval
    )
  },
})
