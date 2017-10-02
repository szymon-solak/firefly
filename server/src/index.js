import app from './app'
import { log } from './util'

const port = process.env.PORT || 8080

app.listen(port, function() {
  const host = this.address().address
  log.info(`Firefly server is listening at http://${host}:${port}`)
})
