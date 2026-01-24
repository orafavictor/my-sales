import AppError from "shared/errors/AppError";
import { productsRepositories } from "../database/repositories/ProductsRepositories";
import { Product } from "../database/entities/Product";

interface ICreateProduct {
  name: string;
  price: number;
  quantity: number;
}

export default class CreateProductService {
  async execute({ name, price, quantity }: ICreateProduct): Promise<Product> {
    const productsExists = await productsRepositories.findByName(name);

    if (productsExists) {
      throw new AppError('There is already a product with this name.', 409);
    }

    const product = productsRepositories.create({
      name,
      price,
      quantity
    });

    await productsRepositories.save(product);

    return product;
  }
}
