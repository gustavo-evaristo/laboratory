import { Request, Response, NextFunction } from 'express';
import { isEmpty, verifyToken } from '@utils';

export const authentication = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization;

  if (isEmpty(token)) throw new Error('Not authorized');

  const id = verifyToken(token);

  if (!id) throw new Error('Not authorized');

  req.user = id;

  return next();
};
