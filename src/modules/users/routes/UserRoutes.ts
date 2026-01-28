import { Router } from 'express';
import UsersControllers from '../controllers/UsersControllers';
import { CreateUserSchema } from '../schemas/UserSchemas';

const usersRouter = Router();
const usersControllers = new UsersControllers();

usersRouter.get('/', usersControllers.index);
usersRouter.post('/', CreateUserSchema, usersControllers.create);

export default usersRouter;
