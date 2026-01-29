import { usersRepositories } from "../database/repositories/UsersRepositories";
import { userTokensRepositories } from "../database/repositories/UserTokensRepositories";
import AppError from "shared/errors/AppError";

interface IForgotPassword {
  email: string;
}

export default class SendForgotPasswordEmailService {
  async execute({ email }: IForgotPassword): Promise<void> {
    const user = await usersRepositories.findByEmail(email);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const token = await userTokensRepositories.generate(user.id);

    console.log(token)
  }
}
