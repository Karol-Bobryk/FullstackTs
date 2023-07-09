import { Router, Request, Response } from 'express'

export const serverState = Router()

serverState.get('/', (req: Request, res: Response) => {
  res.json({ text: 'Server is running' })
})
