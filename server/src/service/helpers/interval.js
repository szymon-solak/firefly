export const interval = (fn, timer) => ({
  interval: setInterval(fn, timer),
  enable() { this.interval = setInterval(fn, timer) },
  disable() { this.interval = null },
})
