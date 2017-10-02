import { createFetchService } from '../../service'

function handleComicData(response) {
  const comicData = {
    num: response.num,
    title: response.safe_title,
    desc: response.alt,
    img: response.img,
  }

  this.setState(comicData)
}

export const xkcd = createFetchService({
  name: 'xkcd',
  attachMethods: [handleComicData],
  init() {
    const link = 'https://xkcd.com/info.0.json'

    this.fetch(link, handleComicData)
    this.interval(
      () => this.fetch(link, handleComicData),
      360000
    )
  },
})
