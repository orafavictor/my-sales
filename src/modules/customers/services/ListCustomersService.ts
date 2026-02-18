import { customersRepository } from "src/modules/costumers/database/repositories/CustomerRepositories";
import { Customer } from "../database/entities/Customer";

class ListCustomerService {
  async execute(): Promise<Customer[]> {
    const customers = await customersRepository.find();
    return customers;
  }
}

export default ListCustomerService;
