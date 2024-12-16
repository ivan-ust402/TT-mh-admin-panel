import { AxiosError } from 'axios';

export const handleResponseError = (error: unknown, defaultMessage: string): string => {
  let errorValue = defaultMessage;
  if (error instanceof AxiosError) {
    // Проверяем наличие сообщения ошибки
    errorValue = error.message || defaultMessage;
  } else if (error instanceof Error) {
    // Если это стандартная ошибка, проверяем наличие сообщения
    errorValue = error.message || defaultMessage;
  } else if (typeof error === 'string') {
    // Если error - это строка, используем её как сообщение
    errorValue = error;
  } else if (Array.isArray(error)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorValue = error.reduce((acc, item) => {
      return acc + ` FIELD: ${item.field}, REASON: ${item.message} |`
    }, '') || defaultMessage
  } else if (error && typeof error === 'object') {
    // Если это объект, возможно, у него есть свойство message
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errorValue = (error as any).message || defaultMessage;
  }

  return errorValue;
}