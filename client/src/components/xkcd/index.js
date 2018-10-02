import React from 'react'
import Panel from '../panel'

export default ({ position, data: { title, img } = {} }) => (
  <Panel position={position}>
    <div className="xkcd">
      <img src={img} className="xkcd__image" />
      <p className="xkcd__title">{title}</p>
    </div>
  </Panel>
)
