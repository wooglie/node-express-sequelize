import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Transaction, Dialect } from 'sequelize';
import { UserModel } from './modules/User';

export class SequelizeConnection {
    private readonly sequelizeConfig: SequelizeOptions;
    private instance: Sequelize;

    constructor(options: SequelizeOptions) {
        this.sequelizeConfig = options;
    }

    public initialize(uri?: string): Sequelize {
        console.info('Initialize sequelize connection', uri);
        if (uri) {
            this.instance = new Sequelize(uri, this.sequelizeConfig);
        } else {
            this.instance = new Sequelize(this.sequelizeConfig);
        }
        this.instance.addModels([
            UserModel
        ])
        return this.instance;
    }

    public getInstance() {
        return this.instance;
    }

    public async checkDatabasePresence(name: string) {
        if (!this.instance) {
            console.warn('Sequelize connection must be initialized before checking for database presence');
            return;
        }

        console.info(`Checking for presence of database: ${name}`);
        try {
            const result = await this.instance.query(`SHOW DATABASES LIKE '${name}';`);
            if (result[0].length > 0) {
                console.info(`Database '${name}' exists`);
            } else {
                console.warn(`Database '${name}' not found`);
            }
        } catch (error) {
            console.error(`Connection failed`, error);
        }
    }

    public async transact<T>(f: (transaction: Transaction) => Promise<any>): Promise<T> {
        try {
            return await this.instance.transaction(f);
        } catch (error) {
            console.error(`Error in transaction: ${error}, rolling back`);
            throw error;
        }
    }
}

const modelsPath = `${__dirname}/modules/**/*.model.+(t|j)s`;

export const sequelizeConfig: SequelizeOptions = {
    host: process.env.DB_MASTER_ENDPOINT,
    database: process.env.DB_MASTER_NAME,
    dialect: process.env.DB_DIALECT as Dialect,
    username: process.env.DB_MASTER_USER,
    password: process.env.DB_MASTER_PASS,
    models: [modelsPath],
    logging: false,
    pool: {
        max: 10,
        min: 0
    }
};

export const DatabaseConnection = new SequelizeConnection(sequelizeConfig);

export interface IQueryOptions {
    transaction?: Transaction;
}