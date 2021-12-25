import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const connectedUser = this.usersRepository.findById(user_id);

    if (!connectedUser) {
      throw new Error("User does not exist");
    }

    return connectedUser;
  }
}

export { ShowUserProfileUseCase };
