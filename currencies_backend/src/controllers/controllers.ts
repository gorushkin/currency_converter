import { Request, Response } from 'express';
import { getRate } from '../services/services';
import AppError from '../utils/errorHandling';
import { isDateValid } from '../utils/validate';

export const onRateHandler = async (req: Request, res: Response) => {
  const { date, amount } = req.body as { date: string, amount: string };
  if (!isDateValid(date)) throw new AppError(400, 'There is no body in the request');

  const rates = await getRate(date, amount);

  res.status(200).send({ date, rates });
};
