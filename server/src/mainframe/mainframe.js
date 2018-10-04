import { log } from '../util'

import {
  heartbeat,
  weather,
  music,
  quote,
  xkcd,
  news,
  colors
} from '../services/'

export const mainframe = {
  services: [heartbeat, weather, music, quote, xkcd, news, colors],
  init() {
    log.info('Creating mainframe instance')
    log.info('Active services: ', this.services.map(x => x.name))
    this.services.forEach(service => service.init())
  },
  getStates() {
    return this.services.map(service => ({
      type: service.event,
      payload: service.getState(),
    })
    )
  },
  getStatuses() {
    return this.services.map(service => ({
      name: service.name,
      status: service.getStatus(),
    })
    )
  },
}
