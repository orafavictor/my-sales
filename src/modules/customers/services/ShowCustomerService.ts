import AppError from "shared/errors/AppError";
import { Customer } from "src/modules/customers/infra/database/entities/Customer";
import { ICustomerRepositories } from "../domain/repositories/ICustomerRepositories";
import { inject, injectable } from "tsyringe";

interface IShowCustomer {
  id: number;
}

@injectable()

export default class ShowCustomerService {
  constructor(
    @inject('CustomerRepositories')
    private customersRepository: ICustomerRepositories
  ) {}
  public async execute({ id }: IShowCustomer): Promise<Customer> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    return customer;
  }
}
