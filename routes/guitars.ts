import { Router } from 'express'

export const guitarsRouter = Router()
    // define a secure route handler for the login page that redirects to /guitars
    .get('/', (req, res, next) => {
        req.app.locals.oidc.ensureAuthenticated()(req, res, next)
    }, (req: unknown, res) => {
        const user = req.userContext ? req.userContext.userinfo : null
        res.render('guitars', {
            isAuthenticated: req.isAuthenticated(),
            user,
        })
    })
