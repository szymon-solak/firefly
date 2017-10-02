import React from 'react'
import Panel from '../panel'

export default ({ position, data: { text, author } = {} }) => (
  <Panel position={position}>
    <div className="quote">
      <h1 className="quote__text">{text}</h1>
      <p className="quote__author">{author}</p>
    </div>
  </Panel>
)
