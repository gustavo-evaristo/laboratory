import { isEmpty } from './';

export const isValidPassword = (password: string, confirm_password: string): boolean => {
  if (isEmpty(password) || isEmpty(confirm_password)) return false;

  if (password !== confirm_password) return false;

  return true;
};
