import { wss } from '../app'
import { log } from '../util'
import types from './types'

const blacklist = [types.get('heartbeat')]

const format = (type, payload) => (
  JSON.stringify({
    type,
    payload,
  })
)

export const send = (type, payload) => {
  const msg = format(type, payload)

  if (!blacklist.includes(type)) log.info(msg)

  wss.clients.forEach((ws) => {
    ws.send(msg)
  })
}
