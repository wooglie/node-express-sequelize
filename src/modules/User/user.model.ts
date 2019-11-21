import { Table, Column, Model, Unique, Default, AllowNull, PrimaryKey } from 'sequelize-typescript'
import { generate } from 'shortid';

@Table({
    tableName: 'Users',
    timestamps: true,
    paranoid: true,
})
class UserModel extends Model<UserModel> {

    @Unique
    @PrimaryKey
    @Default(() => generate())
    @Column
    uid: string;

    @Unique
    @AllowNull(false)
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;
}

export default UserModel