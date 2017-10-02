import bunyan from 'bunyan'

export const log = bunyan.createLogger({
  name: 'Firefly',
  stream: process.stdout,
  level: 'info',
})
