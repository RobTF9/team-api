import { RequestHandler } from 'express'
import User from '../resources/user/model'
import { ERROR_MESSAGE } from '../utils/messages'

export const protect: RequestHandler = async (req, res, next) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: ERROR_MESSAGE.NOT_AUTHORIZED, auth: false })
    }
    const user = await User.findById(req.session.user)

    if (!user) {
      return res.status(401).json({ message: ERROR_MESSAGE.NOT_AUTHORIZED, auth: false })
    }

    return next()
  } catch (error) {
    return next(error)
  }
}
