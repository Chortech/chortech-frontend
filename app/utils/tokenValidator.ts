import { Token } from "../models/other/axios/Token";

export const validateToken = (token: Token): boolean => {
  return (token.expires - Math.floor(Date.now() / 1000)) / 60 > 1;
};
