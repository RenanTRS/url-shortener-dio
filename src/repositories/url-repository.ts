export interface URLCreateData {
  hash: string
  shortURL: string
  originURL: string
}

export interface URLRepository {
  create: (data: URLCreateData) => Promise<URLCreateData>
}
