import { Router } from 'express'
import { RedirectController } from './use-cases/redirect-controller'
import { ShortenController } from './use-cases/shorten/shorten-controller'

export const shortenerRoutes = Router()

const urlShortenerController = new ShortenController()
const redirectController = new RedirectController()

shortenerRoutes.post('/shorten', urlShortenerController.shorterner)
shortenerRoutes.get('/:short', redirectController.redirect)
