import { createIntervalService } from '../../service'

function sendHeartbeat() {
  this.send('heartbeat')
}

export const heartbeat = createIntervalService({
  name: 'heartbeat',
  attachMethods: [sendHeartbeat],
  init() {
    this.interval(this.sendHeartbeat, 1000)
  },
})
