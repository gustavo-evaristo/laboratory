import { isEmpty } from '@utils';

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
