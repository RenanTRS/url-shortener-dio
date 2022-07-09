import { URLCreateData, URLFindData, URLRepository } from '../url-repository'
import { URLModel } from './schema'

export class MongoURLRepository implements URLRepository {
  async create({ hash, originURL, shortURL }: URLCreateData) {
    const newURL = await URLModel.create({ hash, shortURL, originURL }) //insert data in database

    return newURL
  }
  async find(req: URLFindData) {
    const url = await URLModel.findOne(req) //search data in database

    return url
  }
}
