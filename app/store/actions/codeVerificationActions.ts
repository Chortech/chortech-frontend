import * as types from "./types";
import { Action } from "../../models/actions/action";
import { InputType } from "../../utils/inputTypes";
import { GenerateCodeRequest } from "../../models/requests/generateCode";

export function requestGenerateCode(
  email: string,
  phone: string,
  inputType: InputType
): Action<GenerateCodeRequest> {
  return {
    type: types.GENERATE_CODE_REQUEST,
    payload: {
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}
