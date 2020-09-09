import {UserAddressModel} from './user.address.model';

export interface UserModel {
  id: number;
  email: string;
  name: string;
  username: string;
  address: UserAddressModel;
}
