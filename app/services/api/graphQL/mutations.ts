import { gql } from "graphql-request";

//#region user
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
      password
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
      password
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

export const ADD_FRIEND = gql`
  mutation addFriend($friendId: ID!, $friendName: String, $userId: ID) {
    createFriend(
      data: {
        friendId: $friendId
        friendName: $friendName
        user: { connect: $userId }
      }
    ) {
      _id
      friendId
      friendName
      user {
        _id
        name
      }`;
//#endregion user
//#region group
export const ADD_Group = gql`
  mutation addGroup($name: String, $creator: ID, $members: [ID]) {
    createGroup(
      data: {
        name: $name
        creator: { connect: $creator }
        members: { connect: $members }
      }
    ) {
      _id
      name
      creator {
        _id
        name
      }
      members {
        data {
          _id
          name
        }
      }
    }
  }
`;

export const UPDATE_GROUP = gql`
  mutation updateGroup(
    $groupId: ID!
    $name: String
    $creator: ID!
    $members: [ID!]
  ) {
    updateGroup(
      id: $groupId
      data: {
        name: $name
        creator: { connect: $creator }
        members: { connect: $members }
      }
    ) {
      _id
      name
      creator {
        _id
        name
      }
      members {
        data {
          _id
          name
        }
      }
    }
  }
`;

export const DELETE_FRIEND = gql`
  mutation deleteFriend($id: ID!) {
    deleteFriend(id: $id) {
      _id
    }
  }
`;
export const DELETE_GROUP = gql`
  mutation deleteUser($groupId: ID!) {
    deleteGroup(id: $groupId) {
      _id
      name
      creator
      members
    }
  }
`;
//#endregion group
