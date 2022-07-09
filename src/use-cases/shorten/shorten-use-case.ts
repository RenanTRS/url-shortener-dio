import { URLRepository } from '../../repositories/url-repository'

interface ShortenUseCaseRequest {
  hash?: string
  shortURL?: string
  originURL?: string
}

export class ShortenUseCase {
  constructor(private urlRepository: URLRepository) {}

  async excute(req: ShortenUseCaseRequest) {
    const { hash, shortURL, originURL } = req

    const newUrl = await this.urlRepository.create({
      hash,
      shortURL,
      originURL
    })
    return newUrl
  }
}
