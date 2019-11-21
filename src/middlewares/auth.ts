import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken';
import * as _ from 'lodash'
import { allowedRoutes } from '../core/constants';
import { Context, TokenContext } from '../core/types';
import { GenericError } from '../services/Error';

export const Auth = (req: Request, res: Response, next: NextFunction) => {

    if (_.includes(allowedRoutes, req.path)) {
        req.body = {
            body: req.body,
            context: null
        } as Context
        return next();
    }

    const token = req.headers.token || req.body.token || req.query.token;

    if (!token) return next(new GenericError('Token not provided!'));

    jwt.verify(token, process.env.JWT_SECRET, async (error: any, { email }: TokenContext) => {
        if (error) return next(new GenericError('Token is not verified'));

        try {
            // get user by data from context
        }
        catch (e) { return next(e); }

        req.body = {
            body: req.body,
            context: {
                email
            }
        } as Context;

        next();
    })
}