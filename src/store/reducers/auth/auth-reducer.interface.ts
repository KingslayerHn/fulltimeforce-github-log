import { UserInterface } from '../../../interfaces/user.interface';

export interface AuthReducerInterface {
  token?: string;
  user?: UserInterface;
  isLoading: boolean;
}
