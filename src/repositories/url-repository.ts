export interface URLCreateData {
  hash: string
  shortURL: string
  originURL: string
}

export interface URLFindData {
  hash?: string
  originURL?: string
}

//Methods
export interface URLRepository {
  create: (data: URLCreateData) => Promise<URLCreateData>
  find: (data: URLFindData) => Promise<URLCreateData>
}
