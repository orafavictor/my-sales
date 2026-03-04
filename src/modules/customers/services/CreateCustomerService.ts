import AppError from "shared/errors/AppError";
import { Customer } from "src/modules/customers/infra/database/entities/Customer";
import { ICreateCustomer } from "../domain/models/ICreateUser";
import { ICustomerRepositories } from "../domain/repositories/ICustomerRepositories";

export class CreateCustomerService {
  constructor(private customersRepository: ICustomerRepositories) {}
  public async execute({ name, email,}: ICreateCustomer): Promise<Customer> {
    const emailExists = await this.customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email address already used.", 409);
    }

    const customer = await this.customersRepository.create({
      name,
      email,
    });

    return customer;
  }
}
