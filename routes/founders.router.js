import { Router } from 'express'

const foundersRouter = Router()

foundersRouter.get('/', getAllFounders)

foundersRouter.get('/:id', getOneFounder)

foundersRouter.post('/', addNewFounder)

export default foundersRouter
