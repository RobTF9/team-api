import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import itemRouter from './resources/item/router'
import path from 'path'
import connect from './db/connect'
import errorHandler from './utils/error'
import authSession from './auth/session'
import { protect } from './auth/middleware'
import authRouter from './auth/router'

export const app = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.set('trust proxy', 1)
app.use(authSession)
app.use('/auth', authRouter)
app.use('/api', protect)
app.use('/api/item', itemRouter)

const clientPath = path.join(__dirname, '..', 'client')
app.use(express.static(clientPath))
app.use('*', express.static(clientPath))

app.use(errorHandler)

async function startServer(): Promise<void> {
  try {
    connect()
    app.listen(port, () => console.log(`Server running on ${port}`))
  } catch (error) {
    console.error(error)
  }
}

export default startServer
