import { User, UserDTO } from "../../abstractions/models/User";
import { UserService } from "./userService";

const MockUserRepository = {
  create: jest.fn<Promise<User>, [data: UserDTO]>(),
  findByEmail: jest.fn<Promise<User | undefined>, [id: string]>(),
};

describe("UserService", () => {
  const userService = new UserService(MockUserRepository);

  beforeEach(() => {
    MockUserRepository.create.mockReset();
    MockUserRepository.findByEmail.mockReset();
  });

  it("should be defined", () => {
    expect(userService).toBeDefined();
  });

  const userData = { name: "Teste", email: "teste@fake.com" };
  const fullUser = {
    id: Math.random().toString(10),
    ...userData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  describe("Creating a new user", () => {
    it("should create a new user", async () => {
      MockUserRepository.create.mockReturnValue(
        new Promise((resolve) => resolve(fullUser))
      );

      const user = await userService.create(userData);

      expect(user).toEqual(fullUser);
      expect(MockUserRepository.findByEmail).toBeCalledTimes(1);
      expect(MockUserRepository.create).toBeCalledTimes(1);
    });

    it("shouldn't create a new user (email already taken)", async () => {
      MockUserRepository.findByEmail.mockReturnValue(
        new Promise((resolve) => resolve(fullUser))
      );

      const user = await userService.create(userData);

      expect(user).toBeUndefined();
      expect(MockUserRepository.findByEmail).toBeCalledTimes(1);
      expect(MockUserRepository.create).toBeCalledTimes(0);
    });
  });
});
