import { IUserController } from "../../abstractions/interfaces/controllers/IUserController";
import { IUserService } from "../../abstractions/interfaces/services/IUserService";
import { UserDTO } from "../../abstractions/models/User";
import { Callback } from "../../abstractions/models/Callback";

export class UserController implements IUserController {
  constructor(private userService: IUserService) {}

  createUser = async (call: Record<string, any>, callback: Callback) => {
    const { name, email } = call.request;

    const user = await this.userService.create({ name, email } as UserDTO);

    if (!user) return callback(new Error("Usuário já cadastrado!"), null);

    callback(null, user);
  };
}
