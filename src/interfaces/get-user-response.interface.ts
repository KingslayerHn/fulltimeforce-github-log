import { UserInterface } from './user.interface';

export interface GetUserResponseInterface {
  user: UserInterface;
  token: string;
}
