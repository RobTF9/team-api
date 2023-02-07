import { Router } from 'express'
import controllers from './controller'

const router = Router()

router.route('/').post(controllers.create).get(controllers.readAll)
router.route('/:id').put(controllers.update).get(controllers.readOne).delete(controllers.deleteOne)

export default router
