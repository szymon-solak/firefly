const Websocket = require('ws')

const ws = new Websocket('ws://127.0.0.1:8090')

ws.on('open', () => {
  console.log('open')
})

ws.on('message', (data) => {
  console.log('data', JSON.parse(data))
})
