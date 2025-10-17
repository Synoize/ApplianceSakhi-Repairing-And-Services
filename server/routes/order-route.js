import express from 'express'
import {BookServices} from '../controllers/order-controller.js'

const orderRouter = express.Router()

orderRouter.post('/book', BookServices )

export default orderRouter
