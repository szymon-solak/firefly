import Websocket from 'ws'

import { mainframe } from './mainframe'

export const wss = new Websocket.Server({ port: 8090 })

mainframe.init()

// Send all current states to newly connected clients
wss.on('connection', (ws) => {
  const states = mainframe.getStates()

  states.forEach((state) => {
    ws.send(JSON.stringify(state))
  })
})
