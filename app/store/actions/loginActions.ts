import * as types from './types';
import { ILoginResponse } from '../../models/api/login';
import GraphQLApi from '../../api/graphQL/graphqlApi';

interface IAction {
	type: string;
	payload?: any;
}

export function requestLogin(email: string, phone?: string, password: string): IAction {
	return {
		type: types.LOGIN_REQUEST,
		payload: {
			email,
      phone,
			password,
		},
	};
}

export function loginFailed(): IAction {
	return {
		type: types.LOGIN_FAILED,
	};
}

export function onLoginResponse(response: ILoginResponse): IAction {
	return {
		type: types.LOGIN_RESPONSE,
		payload: response,
	};
}

// export function enableLoader() {
//   return {
//     type: types.LOGIN_ENABLE_LOADER,
//   };
// }

// export function disableLoader() {
//   return {
//     type: types.LOGIN_DISABLE_LOADER,
//   };
// }

export function logOut(): IAction {
	return {
		type: types.LOG_OUT,
	};
}
