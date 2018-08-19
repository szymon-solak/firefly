import { createFetchService } from '../../service'

function handleQuote(response) {
  const quoteData = {
    author: response.author,
    text: response.quote,
  }

  this.setState(quoteData)
}

export const quote = createFetchService({
  name: 'quote',
  attachMethods: [handleQuote],
  init() {
    const link = 'http://quotes.stormconsultancy.co.uk/random.json'

    this.fetch(link, handleQuote)
    this.interval(
      () => this.fetch(link, handleQuote),
      180000
    )
  },
})
