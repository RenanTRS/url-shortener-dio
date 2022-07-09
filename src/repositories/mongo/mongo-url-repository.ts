import { URLCreateData, URLRepository } from '../url-repository'
import { URLModel } from './schema'

export class MongoURLRepository implements URLRepository {
  async create({ hash, originURL, shortURL }: URLCreateData) {
    const newURL = await URLModel.create({ hash, shortURL, originURL })

    return newURL
  }
}
