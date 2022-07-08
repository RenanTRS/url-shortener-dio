import { Router } from 'express'
import { UrlShortenerController } from '../useCases/urlShortener/UrlShortenerController'

export const shortenerRoutes = Router()

const urlShortenerController = new UrlShortenerController()

shortenerRoutes.post('/shorten', urlShortenerController.shorterner)
shortenerRoutes.get('/:hash', urlShortenerController.redirect)
