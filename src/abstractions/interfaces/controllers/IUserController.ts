import { Callback } from "../../models/Callback";

export interface IUserController {
  createUser: (call: Record<string, any>, callback: Callback) => Promise<void>;
}
