import React from 'react'
import { storiesOf } from '@storybook/react'

import Music from '../src/components/music'

storiesOf('Music', module)
  .add('Without active song', () => (
    <Music position='A1:B2' />
  ))
  .add('With set song', () => (
    <Music
      position='A1:B2'
      data={{
        image: 'https://ecsmedia.pl/c/heart-of-glass-w-iext46400811.jpg',
        song: 'Heart Of Glass',
        artist: 'Blondie',
      }}
    />
  ))
