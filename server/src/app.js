import express from 'express'
import Websocket from 'ws'

import { mainframe } from './mainframe'

const app = express()
const router = express.Router()

// Websockets
export const wss = new Websocket.Server({ port: 8090 })

mainframe.init()

wss.on('connection', (ws) => {
  const states = mainframe.getStates()
  console.log(states)

  states.forEach((state) => {
    console.log(state)
    ws.send(JSON.stringify(state))
  })
})

// Express + Router
router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/stub', (req, res) => {
  res.send({
    weather: [
      {
        id: 300,
        main: 'Drizzle',
        description: 'light intensity drizzle',
        icon: '09d',
      },
    ],
    main: {
      temp: 123,
      pressure: 1012,
      humidity: 81,
      temp_min: 217,
      temp_max: 230,
    },
    wind: {
      speed: 4.1,
    },
  })
})

app.use('/', router)

export default app
