import {UserModel} from './user.model';
import {LocationModel} from './location.model';

export class UsersStatusModel {
  userStatusId?: number;

  statusMessage?: string;
  privacyStatusType?: string;
  isPinned?: boolean;

  createTime?: Date;
  updateTime?: Date;

  user?: UserModel = new UserModel();
  location?: LocationModel = new LocationModel();

}
