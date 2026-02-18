import { Request, Response } from "express";
import ListCustomerService from "../services/ListCustomersService";
import DeleteCustomerService from "../services/DeleteCustomerService";
import UpdateCustomerService from "../services/UpdateCustomerService";
import { CreateCustomerService } from "../services/CreateCustomerService";
import ShowCustomerService from "../services/ShowCustomerService";

export default class Customer {
  async index(request: Request, response: Response): Promise<Response> {
    const listCustomer = new ListCustomerService();
    const customers = await listCustomer.execute();
    return response.json(customers);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showCustomer = new ShowCustomerService();
    const customer = await showCustomer.execute({ id: Number(id) });
    return response.json(customer);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;
    const createCustomer = new CreateCustomerService();
    const customer = await createCustomer.execute({
      name,
      email,
     });
    return response.status(201).json(customer);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;
    const updateCustomer = new UpdateCustomerService();
    const customer = await updateCustomer.execute({
      id: Number(id),
      name,
      email,
    });
    return response.json(customer);
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteCustomer = new DeleteCustomerService();
    await deleteCustomer.execute({ id: Number(id) });
    return response.status(204).send();
  }
}
