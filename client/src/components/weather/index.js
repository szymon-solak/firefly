import React from 'react'
import Panel from '../panel'

import { getWeatherIconClass } from '../../util'

export default ({ position, data: {
  name,
  id,
  description,
  temperature,
  humidity,
  wind,
} = {} }) => (
  <Panel position={position}>
    <div className="weather">
      <div className="weather__info">
        <i className={getWeatherIconClass(id)}></i>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      <div className="weather__data">
        <div>
          <i className="wi wi-thermometer"></i>
          <p>{temperature}&#x2103;</p>
        </div>
        <div>
          <i className="wi wi-humidity"></i>
          <p>{humidity}%</p>
        </div>
        <div>
          <i className="wi wi-small-craft-advisory"></i>
          <p>{wind}</p>
        </div>
      </div>
    </div>
  </Panel>
)
