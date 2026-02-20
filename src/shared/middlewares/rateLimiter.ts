import { Request, Response, NextFunction } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";
import { createClient } from "redis";
import AppError from "shared/errors/AppError";

const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  password: process.env.REDIS_PASS || undefined,
});

redisClient.connect().catch(console.error);

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: "rateLimiter",
  points: 5, // Número de pontos (requisições) permitidos
  duration: 60, // Período de tempo em segundos para os pontos
});

export default async function rateLimiter(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await limiter.consume(req.ip as string); // Consome um ponto para o IP do cliente
    return next(); // Permite a requisição continuar
  } catch (err) {
    throw new AppError('Too many requests. Please try again later.', 429); // Retorna erro 429 se o limite for excedido
  }
}
