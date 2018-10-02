import React from 'react'
import Panel from '../panel'

const format = (lyrics) => {
  if (!lyrics) return ''
  return lyrics
    .split('\n')
    .map(line => line.trim())
    .map((line, i) => <p key={i}>{line}</p>)
}

const defaultImage = 'public/default_album.png'

export default ({ position, data: { image, song, artist, lyrics } = {} }) => (
  <Panel position={position}>
    <div className="music">
      <div className="music__currentSong">
        <img src={image || defaultImage} />
        <div className="music__songData">
          <h1>{song || 'Nothing is currently playing'}</h1>
          <p className="music__artist">{artist}</p>
        </div>
      </div>
      <div className="music__lyrics">{format(lyrics)}</div>
    </div>
  </Panel>
)
