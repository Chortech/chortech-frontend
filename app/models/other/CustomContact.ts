import { InputType } from "../../utils/inputTypes";

export type CustomContact = {
  recordID: string;
  name: string;
  phoneNumbers: string[];
  emailAddresses: string[];
  selected?: boolean;
  inputType?: InputType;
};
