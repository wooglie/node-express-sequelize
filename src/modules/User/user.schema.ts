import * as Joi from 'joi';
import { Schema } from '../../schema';

export const CreateUserSchema = Schema.keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
});
