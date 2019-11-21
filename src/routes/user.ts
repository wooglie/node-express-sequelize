import { Router } from 'express';
import { Respond } from '../core/utils';
import { UserService } from '../modules/User';

export const users = Router();

users.get('/', async (req, res, next) => {
  try {
    return Respond(res, await UserService.getAll());
  } catch (e) {
    next(e);
  }
});

users.get('/new', async (req, res, next) => {
  try {
    return Respond(res, await UserService.create());
  } catch (e) {
    next(e);
  }
});