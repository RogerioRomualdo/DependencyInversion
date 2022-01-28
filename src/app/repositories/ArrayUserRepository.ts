import { IUserRepository } from "../../abstractions/interfaces/repositories/IUserRepository";
import { User, UserDTO } from "../../abstractions/models/User";

export class ArrayUserRepository implements IUserRepository {
  private dataBase: Array<User> = [];

  async findByEmail(email: string) {
    return this.dataBase.find((user) => email === user.email);
  }

  async create(userData: UserDTO) {
    const id = Math.random().toString(10);
    const createdAt = new Date();
    const updatedAt = new Date();

    this.dataBase.push({ id, ...userData, createdAt, updatedAt });

    return this.dataBase[this.dataBase.length - 1];
  }
}
