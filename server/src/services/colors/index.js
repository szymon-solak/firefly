import { createIntervalService } from '../../service'
import { music } from '../'

/*
 * This service just re-emits music colors
 * The esp8266 microcontroller had problems receiving
 * whole big music packet so i split out this part
 */

function sendColors() {
  const musicState = music.getState()

  if (!musicState) return

  this.setState({
    colors: musicState.colors,
    r: musicState.colors[0],
    g: musicState.colors[1],
    b: musicState.colors[2],
  })
}

export const colors = createIntervalService({
  name: 'colors',
  attachMethods: [sendColors],
  init() {
    this.interval(this.sendColors, 5000)
  },
})
