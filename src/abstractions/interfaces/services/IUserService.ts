import { User, UserDTO } from "../../models/User";

export interface IUserService {
  create: (userData: UserDTO) => Promise<User | undefined>;
}
