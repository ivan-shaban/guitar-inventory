import {
    Request,
    Response,
    Router,
} from 'express'

export const logoutRouter = Router()
    // define a secure route handler for the login page that redirects to /guitars
    .get('/', (req: Request, res: Response) => {
        // @ts-ignore
        req.logout()
        res.redirect('/')
    })
