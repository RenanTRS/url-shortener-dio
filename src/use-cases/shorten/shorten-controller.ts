import { Request, Response } from 'express'
import shortId from 'shortid'

import { MongoURLRepository } from '../../repositories/mongo/mongo-url-repository'
import { FindUseCase } from '../find-use-case'
import { ShortenUseCase } from './shorten-use-case'

require('dotenv/config') //enviroment variables

export class ShortenController {
  public async shorterner(req: Request, res: Response): Promise<void> {
    const mongoURLRepositoy = new MongoURLRepository()
    const shortenUseCase = new ShortenUseCase(mongoURLRepositoy)
    const findUseCase = new FindUseCase(mongoURLRepositoy)

    const { originURL } = req.body //get url

    //check if it exists
    const url = await findUseCase.excute({ originURL }) //search in database
    if (url) {
      res.json(url)
      return
    }

    const hash = String(shortId.generate()) //create a hash
    const baseUrl = process.env.BASE_URL

    const shortURL = `${baseUrl}/${hash}` //url with hash

    const newURL = await shortenUseCase.excute({ hash, shortURL, originURL }) //save in database

    res.json(newURL)
  }
}
