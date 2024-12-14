import { AxiosError } from 'axios';

export const handleSagaError = (error: unknown, defaultMessage: string): string => {
  let errorValue = defaultMessage
  if (error instanceof AxiosError || error instanceof Error) {
    errorValue = error.message;
  } 
  return errorValue
}