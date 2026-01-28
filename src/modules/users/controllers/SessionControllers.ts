import { Request, Response } from 'express';
import { Session } from 'node:inspector';
import SessionUserService from '../services/SessionUserService';

export default class SessionsControllers {
  async create(request: Request, responde:Response): Promise<Response> {
    const { email, password } = request.body;
    const createSession = new SessionUserService();

    const userToken = await createSession.execute({ email, password });

    return responde.json(userToken);
  }
}
