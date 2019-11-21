import { Router } from 'express';
import * as bcryptjs from 'bcryptjs';
import * as Joi from 'joi';
import * as jwt from 'jsonwebtoken';
import { Respond } from '../core/utils';
import { TokenContext } from '../core/types';
import { GenericError } from '../services/Error';

const LoginSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
});

const login = Router();

login.post('', async (req, res, next) => {
    try {

        const { body } = req.body;
        const { email, password } = body;

        const { error } = Joi.validate(body, LoginSchema);
        if (error) throw new GenericError(error.message);

        // if (!bcryptjs.compareSync(password, 'user password')) throw new GenericError('Incorrect login.');

        const context: TokenContext = { email: 'user@email.com' };

        const token = jwt.sign(context, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

        return Respond(res, { token });
    } catch (e) {
        next(e);
    }
});

export { login }