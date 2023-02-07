import { ErrorRequestHandler } from 'express'
import { ERROR_MESSAGE } from './messages'

const errorHandler: ErrorRequestHandler = (err, _, res) => {
  if (err) {
    res.status(500).json({ message: ERROR_MESSAGE.INTERNAL_SERVER })
    throw new Error(err)
  }
  return res.end()
}

export default errorHandler
