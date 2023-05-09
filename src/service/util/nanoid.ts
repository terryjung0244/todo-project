import { customAlphabet } from 'nanoid';

const nanoIdCustomChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const getNanoid = (): string => {
  const nanoid = customAlphabet(nanoIdCustomChars, 10);
  return nanoid();
};
