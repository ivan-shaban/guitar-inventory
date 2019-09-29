import { Router } from 'express'

export const indexRouter = Router()
    /* GET home page. */
    .get('/', (req: unknown, res, next) => {
        const user = req.userContext ? req.userContext.userinfo : null
        res.render('index', {
            title: 'Guitar Inventory',
            isAuthenticated: req.isAuthenticated(),
            user,
        })
    })
