import { UserRolesEnum } from '../enums/UserRolesEnum';

export interface IUser {
  id: number;
  email: string;
  name: string;
  surname: string;
  patronymic?: string;
  country: string;
  city: string;
  phoneNumber: number;
  role: UserRolesEnum;
}
