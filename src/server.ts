import express from 'express'
import { MongoConnection } from '@repositories/mongo/mongo-connection'
import { shortenerRoutes } from './routes'

require('dotenv/config')

const app = express()

const database = new MongoConnection()

app.use(express.json())
app.use(shortenerRoutes)
database.connection()

app.listen(3333, () => console.log('Server is running on port 3333'))
