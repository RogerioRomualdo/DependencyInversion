import { UserService } from "../services/userService";
import { TypeORMUserRepository } from "../repositories/TypeOrmUserRepository";
import { UserController } from "../controllers/userController";
import { Server } from "@grpc/grpc-js";

const userRepository = new TypeORMUserRepository();
const userService = new UserService(userRepository);
const userController: any = new UserController(userService);

export default (server: Server, proto: any) => {
  server.addService(proto, userController);
};
