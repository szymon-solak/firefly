import React from 'react'
import { render } from 'react-dom'

import '../public/style.sass'
import '../public/weatherIcons/weather-icons.min.scss'

import Dashboard from './app'
import Subscribe from './components/subscribe'
import Music from './components/music'
import News from './components/news'
import Weather from './components/weather'
import Xkcd from './components/xkcd'
import StatusBar from './components/statusBar'

const App = () => (
  <Dashboard rows="5" columns="3">
    <Subscribe type="MUSIC">
      <Music position="a1:a5" />
    </Subscribe>

    <Subscribe type="NEWS">
      <News position="b1:b3" />
    </Subscribe>

    <Subscribe type="WEATHER">
      <Weather position="b4:b5" />
    </Subscribe>

    <Subscribe type="XKCD">
      <Xkcd position="c1:c5" />
    </Subscribe>

    <Subscribe type="HEARTBEAT">
      <StatusBar />
    </Subscribe>
  </Dashboard>
)

render(
  <App />,
  document.getElementById('root'),
)
