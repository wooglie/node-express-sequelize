import UserModel from "./user.model";

export class UserDTO {

    public uid: string;
    public email: string;
    public password: string;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(model: UserModel) {
        this.uid = model.uid;
        this.email = model.email;
        this.password = model.password;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }
}