import { sign } from 'jsonwebtoken';

export const createToken = (data: any, expiresIn: string) => {
  return sign(
    data,
    process.env.TOKEN_KEY || 'b4c380a7-d58f-49a7-8512-f5273f8178e1',
    {
      expiresIn: expiresIn || '1h',
    },
  );
};
