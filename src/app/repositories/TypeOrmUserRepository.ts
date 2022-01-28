import { getRepository } from "typeorm";
import { IUserRepository } from "../../abstractions/interfaces/repositories/IUserRepository";
import { UserDTO, UserTypeORM } from "../../abstractions/models/User";

export class TypeORMUserRepository implements IUserRepository {
  constructor(private ORMRepository = getRepository(UserTypeORM)) {}

  async create(userData: UserDTO) {
    const user = this.ORMRepository.create(userData);
    return await this.ORMRepository.save(user);
  }

  async findByEmail(email: string) {
    const user = await this.ORMRepository.findOne({ where: { email } });
    return user;
  }
}
