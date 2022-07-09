import { Request, Response } from 'express'
import { URLModel } from '../repositories/mongo/schema'

export class RedirectController {
  async redirect(
    req: Request<{ short: string }>,
    res: Response
  ): Promise<void> {
    const hash = req.params.short

    const url = await URLModel.findOne({ hash })
    if (url) {
      res.redirect(url.originURL)
      return
    }
    res.status(400).json({ error: 'URL not found' })
  }
}
