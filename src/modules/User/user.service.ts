import { UserDTO } from './user.dto';
import { UserDAL } from '.';
import { omit } from 'lodash';


class UserService {

    async getAll() {
        console.info(`get all users`);
        const userModels = await UserDAL.getAllUsers();
        return userModels.map(userModel => omit(new UserDTO(userModel), 'password'))
    }

    async create() {
        console.info(`create user`);
        const userModel = await UserDAL.createUser({
            email: 'email',
            password: 'pwd'
        });
        return new UserDTO(userModel)
    }
}

export default new UserService()