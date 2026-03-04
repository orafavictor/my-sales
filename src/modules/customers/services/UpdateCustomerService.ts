import AppError from "shared/errors/AppError";
import { Customer } from "../infra/database/entities/Customer";
import { ICustomerRepositories } from "../domain/repositories/ICustomerRepositories";
import { inject, injectable } from "tsyringe";

interface IUpdateCustomer {
  id: number;
  name: string;
  email: string;
}

@injectable()

export default class UpdateCustomerService {
  constructor(
    @inject('CustomerRepositories')
    private customersRepository: ICustomerRepositories
  ) {}

  public async execute({
    id,
    name,
    email,
   }: IUpdateCustomer): Promise<Customer> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    const customerExists = await this.customersRepository.findByEmail(email);

    if (customerExists && email !== customer.email) {
      throw new AppError("Email address already used.", 409);
    }

    customer.name = name;
    customer.email = email;

    await this.customersRepository.save(customer);
    return customer;
  }
}
