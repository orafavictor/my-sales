import { custom } from "joi";
import { ICustomer } from "modules/customers/domain/models/ICustomer";
import { ICustomerRepositories } from "modules/customers/domain/repositories/ICustomerRepositories";
import CustomersRepository from "modules/customers/infra/database/repositories/CustomerRepositories";
import { container } from "tsyringe";

container.registerSingleton<ICustomerRepositories>(
  'CustomerRepositories',
  CustomersRepository,
)
