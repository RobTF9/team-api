import { RequestHandler } from 'express'
import User from '../resources/user/model'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from '../utils/messages'

export const signIn: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: ERROR_MESSAGE.NO_EMAIL_OR_PASSWORD, auth: false })
    }

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
      return res.status(401).json({ message: ERROR_MESSAGE.INVALID_EMAIL_OR_PASSWORD, auth: false })
    }

    const match = user && user.checkPassword(req.body.password)

    if (!match) {
      return res.status(401).json({ message: ERROR_MESSAGE.INVALID_EMAIL_OR_PASSWORD, auth: false })
    }

    req.session.user = `${user._id}`

    return res.status(201).send({ message: SUCCESS_MESSAGE.SUCCESSFUL_SIGN_IN, auth: true })
  } catch (error) {
    return next(error)
  }
}

export const signUp: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.username) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGE.NO_EMAIL_OR_USERNAME_OR_PASSWORD, auth: false })
    }

    const emailExists = await User.findOne({ email: req.body.email })

    if (emailExists) {
      return res.status(400).json({ message: ERROR_MESSAGE.EMAIL_IN_USE, auth: false })
    }

    const usernameExists = await User.findOne({ username: req.body.username })

    if (usernameExists) {
      return res.status(400).json({ message: ERROR_MESSAGE.USERNAME_IN_USE, auth: false })
    }

    const user = await User.create(req.body)
    req.session.user = `${user._id}`

    return res.status(201).send({ message: SUCCESS_MESSAGE.SUCCESSFUL_SIGN_UP, auth: true })
  } catch (error) {
    return next(error)
  }
}

export const checkAuth: RequestHandler = async (req, res, next) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: ERROR_MESSAGE.NOT_AUTHORIZED, auth: false })
    }

    const user = await User.findById(req.session.user)

    if (!user) {
      return res.status(401).json({ message: ERROR_MESSAGE.NOT_AUTHORIZED, auth: false })
    }

    return res.status(200).json({ message: SUCCESS_MESSAGE.AUTHORIZED, auth: true })
  } catch (error) {
    return next(error)
  }
}

export const signOut: RequestHandler = async (req, res, next) => {
  try {
    return req.session.destroy(() =>
      res.json({ message: SUCCESS_MESSAGE.SUCCESSFUL_SIGN_OUT, auth: false })
    )
  } catch (error) {
    return next(error)
  }
}
