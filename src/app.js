import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import environments from './config/environments.js'
import responses from './routers/responses.routes.js'
import { errorHandler } from './middleware/ErrorHandlingMiddleware.js'
import router from './routers/index.routes.js'

const app = express()

const { PORT } = environments

app.use(express.json())

app.use(cors())
app.use(cookieParser())

app.use(responses)
app.use('/api', router)

app.use(errorHandler)

const start = async () => {
  try {
    mongoose.connect(environments.MONGO_URI)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
