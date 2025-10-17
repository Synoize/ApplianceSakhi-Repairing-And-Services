import express from 'express'
import { contactMessage } from '../controllers/contact-controller.js'

const contactRouter = express.Router()

contactRouter.post('/message', contactMessage )

export default contactRouter
