import { Router } from 'express';
import OrdersController from '../controller/OrdersControllers';
import {
  createOrderValidate,
  idParamsValidate,
} from '../schemas/OrdersSchemas';
import AuthMiddleware from 'shared/middlewares/authMiddleware';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.use(AuthMiddleware.execute);

ordersRouter.get('/:id', idParamsValidate, ordersController.show);
ordersRouter.post('/', createOrderValidate, ordersController.create);

export default ordersRouter;
