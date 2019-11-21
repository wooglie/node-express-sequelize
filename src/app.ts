import * as express from 'express';
import { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import { Auth } from './middlewares/auth';
import { login } from './routes/login';
import { protectedRoute } from './routes/protectedRoute';
import { Socket } from './socket';
import { users } from './routes/user';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {

        this.app.use(cors())

        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.use(bodyParser.json({ limit: '5mb' }));

        this.app.use(Auth);

        this.app.get('/', (req: Request, res: Response) => {

            Socket.io.emit('hello', 'Hi from home page')

            return res.status(200).json({
                name: process.env.PROJECT_NAME,
                version: process.env.VERSION,
                author: process.env.AUTHOR
            })
        })

        this.app.use('/login', login);
        this.app.use('/protected', protectedRoute);
        this.app.use('/users', users);
    }
}

export default new App().app;