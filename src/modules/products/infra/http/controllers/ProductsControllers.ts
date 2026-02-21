import { Request, Response } from 'express';
import ListProductService from 'src/modules/products/services/ListProductService'
import ShowProductService from 'src/modules/products/services/ShowProductService';
import CreateProductService from 'src/modules/products/services/CreateProductService';
import UpdateProductService from 'src/modules/products/services/UpdateProductService';
import DeleteProductService from 'src/modules/products/services/DeleteProductService';

export default class ProductsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listProductsService = new ListProductService();
    const products = await listProductsService.execute();
    return response.json(products);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showProductService = new ShowProductService();
    const products = await showProductService.execute({ id: id as string });
    return response.json(products);
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
      name,
      price,
      quantity,
    });
    return response.json(product);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, price, quantity } = request.body;
    const updateProductService = new UpdateProductService();
    const product = await updateProductService.execute({
      id: id as string,
      name,
      price,
      quantity,
    });
    return response.json(product);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteProductService = new DeleteProductService();
    await deleteProductService.execute({ id: id as string });
    return response.status(204).send();
  }
}
