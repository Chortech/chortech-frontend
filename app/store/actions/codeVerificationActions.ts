import * as types from "./types";
import { Action } from "../../models/actions/action";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { InputType } from "../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../models/responses/identify";
import { IdentifyAccountRequest } from "../../models/requests/identify";
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

