import { IUserRepository } from "../../abstractions/interfaces/repositories/IUserRepository";
import { IUserService } from "../../abstractions/interfaces/services/IUserService";
import { UserDTO } from "../../abstractions/models/User";

export class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  create = async (userData: UserDTO) => {
    const userExists = await this.userRepository.findByEmail(userData.email);

    if (userExists) return;

    return await this.userRepository.create(userData);
  };
}
