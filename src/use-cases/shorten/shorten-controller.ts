import { Request, Response } from 'express'
import shortId from 'shortid'
import { MongoURLRepository } from '../../repositories/mongo/mongo-url-repository'

import { URLModel } from '../../repositories/mongo/schema'

import { ShortenUseCase } from './shorten-use-case'

require('dotenv/config') //enviroment variables

export class ShortenController {
  public async shorterner(req: Request, res: Response): Promise<void> {
    const mongoURLRepositoy = new MongoURLRepository()
    const shortenusecase = new ShortenUseCase(mongoURLRepositoy)

    const { originURL } = req.body //get url

    const url = await URLModel.findOne({ originURL }) //check url exists
    if (url) {
      res.json(url)
      return
    }

    const hash = String(shortId.generate()) //create hash
    const baseUrl = process.env.BASE_URL

    const shortURL = `${baseUrl}/${hash}`

    //criar um caso de uso só para encontrar
    const newURL = await shortenusecase.excute({ hash, shortURL, originURL })

    res.json(newURL)
  }
}
