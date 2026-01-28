import { celebrate, Joi, Segments } from 'celebrate';

export const SessionSchema = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  },
});
