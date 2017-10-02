import types from './types'
import { send } from './websocket'
import { interval, fetch } from './helpers'
import { deepEqual, pipe } from '../util'

const base = {
  status: {},
  state: {},

  getStatus() {
    return this.status
  },

  getState() {
    return this.state
  },

  setStatus(status) {
    this.status = Object.assign(
      {},
      this.status,
      status
    )
  },

  shouldUpdate(action) {
    return !deepEqual(this.state, action)
  },

  setState(action) {
    if (!this.shouldUpdate(action)) return

    this.state = Object.assign(
      {},
      this.state,
      action
    )

    this.send(action)
  },
}

const withEvent = options => o => (
  Object.assign(
    {},
    o,
    {
      name: options.name,
      event: types.get(options.name),
      send: send.bind(null, types.get(options.name)),
      init: options.init,
    }
  )
)

const withMethods = ({ attachMethods }) => (o) => {
  const x = Object.assign({}, o)

  attachMethods.forEach((method) => {
    x[method.name] = method.bind(x)
  })

  return x
}

const withInterval = o => (
  Object.assign(
    {},
    o,
    { interval },
  )
)

const withFetch = o => (
  Object.assign(
    {},
    o,
    { fetch },
  )
)

export function createIntervalService(options) {
  return pipe(
    withEvent(options),
    withMethods(options),
    withInterval
  )(base)
}

export function createFetchService(options) {
  return pipe(
    withEvent(options),
    withMethods(options),
    withInterval,
    withFetch
  )(base)
}
