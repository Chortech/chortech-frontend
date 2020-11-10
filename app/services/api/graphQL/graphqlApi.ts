import { AuthApi, LoginResponse, SignUpResponse } from '../../../models/api/auth';
import { request, GraphQLClient, gql } from 'graphql-request';
import { USER_BY_EMAIL } from './queries';

class GraphQLApi implements AuthApi {
	endpoint: string = 'https://graphql.fauna.com/graphql';
	client: GraphQLClient;

	constructor() {
		this.client = new GraphQLClient(this.endpoint, {
			headers: {
				authorization: 'Bearer fnAD6UlgcTACAU7jiO5_eW7vEu2i9sPTY8NAHCbw',
			},
		});
	}

	async login(email: string, phone?: string, password: string): Promise<LoginResponse> {
		const data = await this.client.request(USER_BY_EMAIL, { emailTxt: email });
		console.log(data.UserByEmail);
		return {
			id: data.UserByEmail._id.toString(),
			token: {
				access: '',
				expires: '',
				created: '',
			},
		};
	}

	async signUp(email?: string, phone?: string, password: string): SignUpResponse {}

	async verifyCode(email?: string, phone?: string, code: string): void {}

	async resetPassword(email?: string, phone?: string, password: string): void {}

	async generateCode(email?: string, phone?: string): void {}

	async cancelCode(email?: string, phone?: string): void {}
}

export const Api = new GraphQLApi();

console.log('abcd' + Api.endpoint);
