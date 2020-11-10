import { gql } from 'graphql-request';

export const USERS_QUERY = gql`
	query {
		Users {
			data {
				_id
				name
				password
				email
				phone
			}
		}
	}
`;

export const USERS_BY_NAME = gql`
	query {
		UsersByName(name: $name) {
			data {
				_id
				name
				password
				email
				phone
			}
		}
	}
`;

export const USER_BY_EMAIL = gql`
	query GetUserByEmail($emailTxt: String!) {
		UserByEmail(email: $emailTxt) {
			_id
			name
			password
			email
			phone
		}
	}
`;
