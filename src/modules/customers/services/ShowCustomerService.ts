import AppError from "shared/errors/AppError";
import { customersRepository } from "src/modules/customers/infra/database/repositories/CustomerRepositories";
import { Customer } from "src/modules/customers/infra/database/entities/Customer";

interface IShowCustomer {
  id: number;
}

export default class ShowCustomerService {
  public async execute({ id }: IShowCustomer): Promise<Customer> {
    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    return customer;
  }
}
