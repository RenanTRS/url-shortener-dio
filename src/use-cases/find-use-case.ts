import { URLRepository } from '../repositories/url-repository'

interface FindUseCaseRequest {
  hash?: string
  originURL?: string
}

export class FindUseCase {
  constructor(private urlRepository: URLRepository) {}

  async excute(req: FindUseCaseRequest) {
    const url = await this.urlRepository.find(req) //search in database

    return url
  }
}
