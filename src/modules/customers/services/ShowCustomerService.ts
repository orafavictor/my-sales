import AppError from "shared/errors/AppError";
import { Customer } from "src/modules/customers/infra/database/entities/Customer";
import { ICustomerRepositories } from "../domain/repositories/ICustomerRepositories";

interface IShowCustomer {
  id: number;
}

export default class ShowCustomerService {
  constructor(private customersRepository: ICustomerRepositories) {}
  public async execute({ id }: IShowCustomer): Promise<Customer> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    return customer;
  }
}
