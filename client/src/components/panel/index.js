import React from 'react'
import { toGridArea } from '../../util'

export default ({ children, position }) => {
  const area = toGridArea(position)
  const style = {
    gridArea: area,
  }

  return (
    <article className="panel" style={style}>
      {children}
    </article>
  )
}
