import { Router } from 'express'
import { UrlMissing } from './middlewares/urlMissing'
import { RedirectController } from './use-cases/redirect-controller'
import { ShortenController } from './use-cases/shorten/shorten-controller'

export const shortenerRoutes = Router()

const urlShortenerController = new ShortenController()
const redirectController = new RedirectController()

shortenerRoutes.post('/shorten', UrlMissing, urlShortenerController.shorterner)
shortenerRoutes.get('/:short', redirectController.redirect)
