import Axios from 'axios'
import { log } from '../../util'

function handleFetchError(err) {
  log.error(err)

  this.setStatus({
    message: err.message,
    code: err.code,
    time: Date.now(),
  })
}

export function fetch(link, handler) {
  Axios
    .get(link)
    .then(res => handler.bind(this, res.data)())
    .catch(err => handleFetchError.bind(this, err)())
}

/*
const test = Object.assign({
  name: 'Test',
  status: {},
  setStatus: () => {},
}, { fetch })
*/
