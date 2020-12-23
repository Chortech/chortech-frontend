import { getType } from "@reduxjs/toolkit";
import { EmailRegex, PhoneRegex, AmountRegex } from "./patterns";
import { InputType } from "./inputTypes";

export class RegexValidator {
  static validateEmailOrPhone(emailOrPhone: string): InputType {
    return PhoneRegex.test(emailOrPhone)
      ? InputType.Phone
      : EmailRegex.test(emailOrPhone)
      ? InputType.Email
      : InputType.None;
  }

  static validateName(name: string) {
    return name.length >= 6 && name.length <= 255 ? InputType.Name : InputType.None;
  }

  static validatePassword(password: string) {
    return password.length >= 8 && password.length <= 16 ? InputType.Password : InputType.None;
  }

  static validateExpenseAmount(amount: string) {
    return AmountRegex.test(amount);
  }
}
