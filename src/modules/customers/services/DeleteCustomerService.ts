import AppError from "shared/errors/AppError";
import { ICustomerRepositories } from "../domain/repositories/ICustomerRepositories";

interface IDeleteCustomer {
  id: number;
}

export default class DeleteCustomerService {
  constructor(private customersRepository: ICustomerRepositories) {}
  public async execute({ id }: IDeleteCustomer): Promise<void> {
    const customer = await this.customersRepository.findById(id);

    if (!customer) {
      throw new AppError("Customer not found.", 404);
    }

    await this.customersRepository.remove(customer);
  }
}
