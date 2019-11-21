require('dotenv').config();

import * as fs from 'fs'
import * as http from 'http'
import * as https from 'https'
import * as SocketIO from 'socket.io'

import { DatabaseConnection } from './sequelize';
import app from './app';
import { Socket } from './socket'

const port = process.env.PORT;
const env = process.env.ENV;
const project = process.env.PROJECT_NAME;
const version = process.env.VERSION;
const host = process.env.HOST;

const startServer = async () => {
    await DatabaseConnection.initialize().sync();

    const server = createServer(env);

    Socket.io = SocketIO(server);

    Socket.io.on('connection', client => {
        client.on('event', data => { console.log('socket', 'event', data); Socket.io.emit('hello', 'welcome!') });
        client.on('disconnect', () => { console.log('socket', 'disconent', client.id) });
    });

    server.listen(port, () => {
        console.info(`${project} v${version} is running on ${host}:${port} in ${env} mode`)
    });
}

const createServer = (env: string) => {
    if (env !== 'production') {
        return http.createServer(app);
    } else {
        const privateKey = fs.readFileSync('/privkey.pem', 'utf8');
        const certificate = fs.readFileSync('/cert.pem', 'utf8');
        const ca = fs.readFileSync('/chain.pem', 'utf8');

        const credentials = {
            key: privateKey,
            cert: certificate,
            ca: ca
        };
        return https.createServer(credentials, app);
    }
}

try {
    startServer();
} catch (error) {
    console.error('Error', error);
    throw new Error(error);
}