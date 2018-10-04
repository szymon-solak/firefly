import { createIntervalService } from '../../service'

function sendHeartbeat() {
  this.setState({
    time: Date.now(),
  })
}

export const heartbeat = createIntervalService({
  name: 'heartbeat',
  attachMethods: [sendHeartbeat],
  init() {
    this.interval(this.sendHeartbeat, 1000)
  },
})
