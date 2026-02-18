import AppError from "shared/errors/AppError";
import { customersRepository } from "../database/repositories/CustomerRepositories";
import { Customer } from "../database/entities/Customer";

interface IUpdateCustomer {
  id: number;
  name: string;
  email: string;
}

export default class UpdateCustomerService {
  public async execute({
    id,
    name,
    email,
   }: IUpdateCustomer): Promise<Customer> {
    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError("Email address already used.", 409);
    }

    customer.name = name;
    customer.email = email;

    await customersRepository.save(customer);
    return customer;
  }
}
