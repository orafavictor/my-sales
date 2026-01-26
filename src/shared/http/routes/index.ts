import { Router } from 'express';
import productsRouter from 'modules/products/routes/ProductsRoutes';

const routes = Router();

routes.get('/health', (request, response) => {
  return response.json({ message: 'Hello, Dev!'});
});
routes.use('/products', productsRouter)

export default routes;
