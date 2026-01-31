import AppError from "shared/errors/AppError";
import { customersRepository } from "src/modules/costumers/database/repositories/CustomerRepositories";
import { Customer } from "src/modules/costumers/database/entities/Customer";

interface ICreateCustomer {
  name: string;
  email: string,
}

export class CreateCustomerService {
  public async execute({ name, email,}: ICreateCustomer): Promise<Customer> {
    const emailExists = await customersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError("Email address already used.", 409);
    }

    const customer = customersRepository.create({
      name,
      email,
    });

    await customersRepository.save(customer);
    return customer;
  }
}
