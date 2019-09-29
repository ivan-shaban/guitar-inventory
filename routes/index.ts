import { Router } from 'express'

export const indexRouter = Router()
    /* GET home page. */
    .get('/', (req, res, next) => {
        res.render('index', { title: 'Guitar Inventory' })
    })
