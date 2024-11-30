import express from 'express'
import foundersRouter from './routes/founders.router.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/founders', foundersRouter)

app.listen(PORT, () => {
  console.log(`Server is live and listening on port ${PORT}`)
})
