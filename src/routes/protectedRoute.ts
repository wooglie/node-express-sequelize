import { Router } from 'express';
import { Respond } from '../core/utils';

const protectedRoute = Router();

protectedRoute.get('', async (req, res, next) => {
    try {
        return Respond(res, { bravo: 'you made it!' });
    } catch (e) {
        next(e);
    }
});

export { protectedRoute }