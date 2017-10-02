import React from 'react'
import Panel from '../panel'

export default ({ position, data }) => (
  <Panel position={position}>
    <h1>{(data && data.payload) || 'Hi!'}</h1>
  </Panel>
)
