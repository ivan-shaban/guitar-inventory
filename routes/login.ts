import { Router } from 'express'

export const loginRouter = Router()
    // define a secure route handler for the login page that redirects to /guitars
    // .get('/', oidc.ensureAuthenticated(), (req, res) => {
    //     res.redirect('/guitars')
    // })
    .get('/',
        (req, res, next) =>
            req.app.locals.oidc.ensureAuthenticated()(req, res, next),
        (req, res) => {
            res.redirect('/guitars')
        })
