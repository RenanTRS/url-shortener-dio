import { NextFunction, Request, Response } from 'express'

export const UrlMissing = (req: Request, res: Response, next: NextFunction) => {
  const { originURL } = req.body

  if (!originURL) {
    return res.status(400).json({ error: 'URL is not found' })
  }
  next()
}
