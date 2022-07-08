import express from 'express'
import { shortenerRoutes } from './routes/urlShortener.routes'

const app = express()

app.use(express.json())
app.use(shortenerRoutes)

app.listen(3333, () => console.log('Server is running on port 3333'))
