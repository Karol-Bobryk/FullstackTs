import './absolutePath'
import express, { Express } from 'express'
import { paths } from './src/const/paths'
import { serverState } from './src/routes/serverState'

const app: Express = express()

app.use(paths.serverState, serverState)

app.listen(5000)
