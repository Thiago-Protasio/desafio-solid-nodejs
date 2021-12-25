import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const connectedUser = this.usersRepository.findById(user_id);

    if (!connectedUser) {
      throw new Error("User does not exist");
    }

    const updatedUser = this.usersRepository.turnAdmin(connectedUser);
    return updatedUser;
  }
}

export { TurnUserAdminUseCase };
