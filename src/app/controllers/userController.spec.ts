import { User, UserDTO } from "../../abstractions/models/User";
import { UserController } from "./userController";

const MockUserService = {
  create: jest.fn<Promise<User | undefined>, [data: UserDTO]>(),
};

describe("UserController", () => {
  const userController = new UserController(MockUserService);

  it("should be defined", () => {
    expect(userController).toBeDefined();
  });

  const call = { request: { name: "Teste", email: "teste@fake.com" } };
  const fullUser = {
    id: Math.random().toString(10),
    ...call.request,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  describe("Creating a new user", () => {
    it("should return a full user", async () => {
      MockUserService.create.mockReturnValue(
        new Promise((resolve) => resolve(fullUser))
      );

      await userController.createUser(call, (error, result) => {
        expect(result).toEqual(fullUser);
        expect(error).toBeNull();
      });

      expect(MockUserService.create).toBeCalledTimes(1);
    });

    it("should throw an error (user couldn't be created)", async () => {
      MockUserService.create.mockReturnValue(
        new Promise((resolve) => resolve(undefined))
      );

      await userController.createUser(call, (error, result) => {
        expect(error).toBeInstanceOf(Error);
        expect(result).toBeNull();
      });

      expect(MockUserService.create).toBeCalledTimes(1);
    });
  });
});
