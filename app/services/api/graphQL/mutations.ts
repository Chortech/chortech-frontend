import { gql } from "graphql-request";

export const ADD_USER = gql`
  mutation addUser(
    $name: String
    $password: String!
    $email: String
    $phone: String
  ) {
    createUser(
      data: { name: $name, password: $password, email: $email, phone: $phone }
    ) {
      _id
      name
      email
      phone
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $userId: ID!
    $name: String
    $password: String!
    $email: String
    $phone: String
  ) {
    updateUser(
      id: $userId
      data: { name: $name, password: $password, email: $email, phone: $phone }
    ) {
      _id
      name
      email
      phone
    }
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUser($userId: ID!, $password: String!) {
    updateUser(id: $userId, data: { password: $password }) {
      _id
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(id: $userId) {
      _id
      name
      email
      phone
    }
  }
`;
