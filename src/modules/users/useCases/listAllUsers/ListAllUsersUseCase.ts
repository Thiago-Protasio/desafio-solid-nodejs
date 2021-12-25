import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const connectedUser = this.usersRepository.findById(user_id);

    if (!connectedUser) {
      throw new Error("User does not exist");
    }

    if (!connectedUser.admin) {
      throw new Error("Permission denied");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
