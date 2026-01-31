import { User as user } from '../database/entities/User';
import AppError from 'shared/errors/AppError';
import { usersRepositories } from '../database/repositories/UsersRepositories';

interface IShowProfile {
  user_id: number;
}

export default class ShowProfileService {
  async execute({ user_id }: IShowProfile): Promise<user> {
    const user = await usersRepositories.findById(user_id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}
