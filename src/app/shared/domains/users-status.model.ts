import {UserModel} from "./user.model";
import {LocationModel} from "./location.model";

export class UsersStatusModel {
  userStatusId?: number;

  statusMessage?: string;
  privacyStatusType?: string;
  isPinned?: boolean;

  createdAt?: Date;
  updatedAt?: Date;

  user?: UserModel;
  location?: LocationModel;

}
