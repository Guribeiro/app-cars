import { AxiosError } from 'axios';

const verifyCodeError = (error: unknown): string => {
  const { message } = error as AxiosError;

  return message;
};

export default verifyCodeError;
