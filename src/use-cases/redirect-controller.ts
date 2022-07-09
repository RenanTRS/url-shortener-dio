import { Request, Response } from 'express'

import { MongoURLRepository } from '../repositories/mongo/mongo-url-repository'
import { FindUseCase } from './find-use-case'

export class RedirectController {
  async redirect(
    req: Request<{ short: string }>,
    res: Response
  ): Promise<void> {
    const mongoURLRepositoy = new MongoURLRepository()
    const findUseCase = new FindUseCase(mongoURLRepositoy)

    const hash = req.params.short //get urlshort

    //Check if it exists
    const url = await findUseCase.excute({ hash }) //search a short url in database
    if (url) {
      res.redirect(url.originURL)
      return
    }
    res.status(400).json({ error: 'URL not found' })
  }
}
