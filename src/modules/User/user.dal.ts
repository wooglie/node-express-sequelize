import * as bcryptjs from 'bcryptjs';
import UserModel from "./user.model";
import { bcryptjsSaltRounds } from '../../core/constants';
import { UpdateOptions } from 'sequelize';
import { GenericError } from '../../services/Error';
import { UserDTO } from './user.dto';

class UserDAL {

    async getUserByEmail(email: string) {
        const userModel = await UserModel.findOne({ where: { email } });
        if (!userModel) throw new GenericError(`User with email: ${email} not found.`);
        return userModel;
    }

    async getAllUsers() {
        const userModels = await UserModel.findAll();
        if (!userModels) throw new GenericError(`There is no users`);
        return userModels;
    }

    async createUser(user: Partial<UserDTO>) {
        try {
            const userModel = await UserModel.create({
                ...user,
                password: bcryptjs.hashSync(user.password, bcryptjsSaltRounds)
            });

            return userModel;
        } catch (e) {
            throw (e)
        }
    }

    async updateUser(data?: any, options?: UpdateOptions) {
        try {
            return (await UserModel.update(data, options));
        } catch (e) {
            throw (e)
        }
    }

    async deleteUser(itemId: string) {
        try {
            return (await UserModel.destroy({ where: { id: itemId } }));
        } catch (e) {
            throw (e)
        }
    }
}

export default new UserDAL()