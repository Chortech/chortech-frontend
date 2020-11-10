import { gql } from 'graphql-request';

const ADD_USER = gql`
	mutation addUser($name: String, $password: String!, $email: String, $phone: String) {
		createUser(data: { name: $name, password: $password, email: $email, phone: $phone }) {
			_id
			name
			email
			phone
		}
	}
`;

const UPDATE_USER = gql`
	mutation updateUser($userId: number, $name: String, $password: String!, $email: String, $phone: String) {
		updateUser(id: $userId, data: { name: $name, password: $password, email: $email, phone: $phone }) {
			_id
			name
			email
			phone
		}
	}
`;

const DELETE_USER = gql`
	mutation deleteUser($userId: number) {
		deleteUser(id: $userId) {
			_id
			name
			email
			phone
		}
	}
`;
