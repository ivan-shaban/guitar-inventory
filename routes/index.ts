import {Router} from "express";

export const indexRouter = Router()
/* GET home page. */
    .get('/', function (req, res, next) {
        res.render('index', {title: 'Express'});
    });
