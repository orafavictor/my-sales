import e, { Router } from 'express';
import UpdateAvatarControllers from '../controllers/UserAvatarControllers';
import uploadConfig from 'config/upload';
import multer from 'multer';
import AuthMiddleware from 'shared/middlewares/authMiddleware';

const avatarRouter = Router();
const UserAvatarControllers = new UpdateAvatarControllers();
const upload = multer(uploadConfig);

avatarRouter.patch(
  '/',
  AuthMiddleware.execute,
  upload.single('avatar'),
  UserAvatarControllers.update
);

export default avatarRouter;
