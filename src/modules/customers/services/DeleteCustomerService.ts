import AppError from "shared/errors/AppError";
import { ICustomerRepositories } from "../domain/repositories/ICustomerRepositories";
import { inject, injectable } from "tsyringe";

interface IDeleteCustomer {
  id: number;
}

@injectable()

export default class DeleteCustomerService {
  constructor(
    @inject('CustomerRepositories')
    private customersRepository: ICustomerRepositories

  ) {}
  public async execute({ id }: IDeleteCustomer): Promise<void> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    await this.customersRepository.remove(customer);
  }
}
