import { Router } from 'express';
import SessionsControllers from '../controllers/SessionControllers';
import { SessionSchema } from '../schemas/SessionSchema';

const sessionsRouter = Router();
const sessionsControllers = new SessionsControllers();

sessionsRouter.post('/', SessionSchema, sessionsControllers.create);

export default sessionsRouter;
