import { compareSync, hashSync } from 'bcryptjs';
import { isEmpty, jwt } from '@utils';

export const isValidPassword = (password: string, confirm_password: string): boolean => {
  if (isEmpty(password) || isEmpty(confirm_password)) return false;

  if (password !== confirm_password) return false;

  if (password.length < 8) return false;

  if (!password.match('([0-9])')) return false;

  if (!password.match('([a-z])')) return false;

  if (!password.match('([A-Z])')) return false;

  if (!password.match('([!@#$&*])')) return false;

  return true;
};

export const encryptPassword = (password: string): string => {
  return hashSync(password, 8);
};

export const decryptPassword = (password: string, passwordCompare: string): boolean => {
  return compareSync(password, passwordCompare);
};

export const generateToken = (id: number): string => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: '30d',
  });
};
