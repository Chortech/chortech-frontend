import { Token } from "../models/other/axios/Token";

export const validateToken = (token: Token): boolean => {
  let result: boolean = false;
  if (token != undefined) {
    result = (token.expires - Math.floor(Date.now() / 1000)) / 60 > 1;
  }
  return result;
};
