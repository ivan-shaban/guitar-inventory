import {
    Request,
    Response,
    Router,
} from 'express'

export const guitarsRouter = Router()
    // define a secure route handler for the login page that redirects to /guitars
    .get('/', (req, res, next) => {
        if (req.app.locals.oidc.ensureAuthenticated()) {
            next()
        }
    }, (req, res) => {
        res.render('guitars')
    })
