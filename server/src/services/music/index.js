import lyrics from 'lyric-get'
import Vibrant from 'node-vibrant'

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

async function handleMusicData(response) {
  if (!response.recenttracks) {
    this.setState({
      artist: '',
      song: 'Nothing is currenly playing',
      image: '',
      colors: [0, 0, 0],
      lyrics: '',
    })
    return
  }

  const track = response.recenttracks.track[0]
  const artist = track.artist['#text']
  const song = track.name
  const image = track.image[track.image.length - 1]['#text']

  const musicData = {
    artist,
    song,
    image,
  }

  if (image) {
    const colors = await Vibrant
      .from(image)
      .getPalette()

    // eslint-disable-next-line
    const vibrantColors = colors.Vibrant._rgb

    const normalizedColors = vibrantColors.map(Math.round)

    musicData.colors = normalizedColors
  }

  try {
    const songLyrics = await getLyrics(artist, song)
    musicData.lyrics = songLyrics
  } catch (err) {
    // Lyrics not found, pass
  }

  this.setState(Object.assign({}, musicData))
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
