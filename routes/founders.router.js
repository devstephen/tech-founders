import { Router } from 'express'
import {
  getAllFounders,
  getOneFounder,
  addNewFounder,
} from '../controllers/founders.controller.js'

const foundersRouter = Router()

foundersRouter.get('/', getAllFounders)

foundersRouter.get('/:id', getOneFounder)

foundersRouter.post('/', addNewFounder)

export default foundersRouter
