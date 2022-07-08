import { Request, Response } from 'express'
import shortId from 'shortid'

require('dotenv/config') //enviroment variables

export class UrlShortenerController {
  public async shorterner(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body //get url
    const hash = shortId.generate() //create hash
    const baseUrl = process.env.BASE_URL

    const shortUrl = `${baseUrl}/${hash}`

    res.json({ originURL, hash, shortUrl })
  }

  public async redirect(
    req: Request<{ hash: string }>,
    res: Response
  ): Promise<void> {
    const hash = req.params.hash

    //mock
    const mockUrl = {
      originURL:
        'https://github.com/RenanTRS/arq-rest-node-dio/blob/main/src/db.ts',
      hash: 'QA8fWv8tI',
      shortUrl: 'http://localhost:3333/QA8fWv8tI'
    }

    res.redirect(mockUrl.originURL)
  }
}
