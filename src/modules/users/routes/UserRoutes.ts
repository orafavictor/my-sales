import { Router } from 'express';
import UsersControllers from '../controllers/UsersControllers';
import { CreateUserSchema } from '../schemas/UserSchemas';
import AuthMiddleware from 'shared/middlewares/authMiddleware';

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get('/', AuthMiddleware.execute, usersControllers.index);
usersRouter.post('/', CreateUserSchema, usersControllers.create);

export default usersRouter;
