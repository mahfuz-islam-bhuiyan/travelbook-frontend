import {UserModel} from "./user.model";

export interface UserLoginDataModel {
    user: UserModel;
    token: string;
}
