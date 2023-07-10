import './absolutePath'
import express, { Express } from 'express'
import { paths } from './src/const/paths'
import { serverState } from './src/routes/serverState'
require('dotenv').config()
const port = process.env.PORT
const app: Express = express()

app.use(paths.serverState, serverState)

app.listen(port, () => console.log(`Server is running, port ${port}.`))
