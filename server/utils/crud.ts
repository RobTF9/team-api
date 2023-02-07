import { RequestHandler } from 'express'
import { Model } from 'mongoose'
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from './messages'

function crudControllers<T>(model: Model<T>, collection: string) {
  const create: RequestHandler = async (req, res, next) => {
    try {
      const item = await model.create({
        ...req.body,
        createdBy: req.session.user,
      })
      return res.status(200).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_CREATED(collection),
      })
    } catch (error) {
      return next(error)
    }
  }

  const readAll: RequestHandler = async (req, res, next) => {
    try {
      const items = await model.find({ createdBy: req.session.user })
      return res.status(200).json({ data: items })
    } catch (error) {
      return next(error)
    }
  }

  const readOne: RequestHandler = async (req, res, next) => {
    try {
      const item = await model.findById(req.params.id).lean().exec()

      if (!item)
        res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND(collection) })

      return res.status(200).json({ data: item })
    } catch (error) {
      return next(error)
    }
  }

  const update: RequestHandler = async (req, res, next) => {
    try {
      const item = await model
        .findByIdAndUpdate(req.params.id, req.body)
        .lean()
        .exec()

      if (!item)
        res
          .status(404)
          .json({ message: ERROR_MESSAGE.RESOURCE_NOT_FOUND(collection) })

      return res.status(201).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_UPDATED(collection),
      })
    } catch (error) {
      return next(error)
    }
  }

  const deleteOne: RequestHandler = async (req, res, next) => {
    try {
      const item = await model.findByIdAndDelete(req.params.id).lean().exec()
      return res.status(200).json({
        data: item,
        message: SUCCESS_MESSAGE.RESOURCE_DELETED(collection),
      })
    } catch (error) {
      return next(error)
    }
  }

  return {
    create,
    readAll,
    readOne,
    update,
    deleteOne,
  }
}

export default crudControllers
