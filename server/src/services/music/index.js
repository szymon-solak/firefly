import lyrics from 'lyric-get'
import { createFetchService } from '../../service'
import { music as api } from '../../config'

function getLyrics(artist, song) {
  return new Promise((resolve, reject) => {
    lyrics.get(artist, song, (err, res) => {
      if (err) reject(err)
      resolve(res)
    })
  })
}

function handleMusicData(response) {
  if (!response.recenttracks) {
    this.setState({
      artist: '',
      song: 'Nothing is currenly playing',
      image: '',
      lyrics: '',
    })
    return
  }

  const track = response.recenttracks.track[0]
  const artist = track.artist['#text']
  const song = track.name

  const musicData = {
    artist,
    song,
    image: track.image[track.image.length - 1]['#text'],
  }

  getLyrics(artist, song)
    .then(res =>
      Object.assign({}, musicData, { lyrics: res })
    )
    .then((newState) => {
      this.setState(newState)
    })
    .catch(() => {
      // Lyrics not found
      this.setState(Object.assign({}, musicData))
    })
}

export const music = createFetchService({
  name: 'music',
  attachMethods: [handleMusicData],
  init() {
    const link = `${api.link}&limit=1&user=${api.user}&api_key=${api.token}&format=json`

    this.fetch(link, handleMusicData)
    this.interval(
      () => this.fetch(link, handleMusicData),
      api.interval
    )
  },
})
