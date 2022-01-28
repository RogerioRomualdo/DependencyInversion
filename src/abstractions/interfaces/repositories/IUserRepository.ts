import { User, UserDTO } from "../../models/User";

export interface IUserRepository {
  findByEmail: (email: string) => Promise<User | undefined>;
  create: (userData: UserDTO) => Promise<User>;
}
