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
      password
      email
      phone
      credit
      balance
      friends {
        data {
          _id
          friendId
          friendName
        }
      }
      groups {
        data {
          _id
          name
        }
      }
      activities {
        data {
          _id
          name
          user {
            _id
            name
          }
          type
          expense {
            _id
            description
            category
            totalPrice
            participants {
              data {
                _id
                user {
                  name
                }
                share
              }
            }
          }
          debt {
            _id
            description
            debt
            creditor {
              _id
              name
            }
            category
          }
        }
      }
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
      }
    }
  }
`;
//#endregion user
//#region group
export const ADD_Group = gql`
  mutation addGroup($name: String, $creatorId: ID, $membersIds: [ID]) {
    createGroup(
      data: {
        name: $name
        creator: { connect: $creatorId }
        members: { connect: $membersIds }
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
    }
  }
`;

export const ADD_PARTICIPANT = gql`
  mutation addParticipant($userId: ID!, $expenseId: ID!, $share: Int) {
    createParticipant(
      data: {
        user: { connect: $userId }
        expense: { connect: $expenseId }
        share: $share
      }
    )
  }
`;

export const ADD_NON_GROUP_EXPENSE_ACTIVITY = gql`
  mutation addActivity(
    $userId: ID!
    $name: String
    $type: String
    $expenseId: ID
  ) {
    createActivity(
      data: {
        user: { connect: $userId }
        type: $type
        name: $name
        expense: { connect: $expenseId }
      }
    ) {
      _id
      type
      name
      expense {
        _id
        description
        category
        totalPrice
        participants {
          data {
            _id
            user {
              _id
              name
            }
          }
        }
      }
      debt {
        _id
        description
        category
        debt
        creditor {
          _id
          name
        }
      }
    }
  }
`;

export const ADD_GROUP_DEBT_ACTIVITY = gql`
  mutation addActivity(
    $userId: ID!
    $name: String
    $type: String
    $groupId: ID
    $debtId: ID
  ) {
    createActivity(
      data: {
        user: { connect: $userId }
        type: $type
        name: $name
        group: { connect: $groupId }
        debt: { connect: $debtId }
      }
    ) {
      _id
      type
      name
      group {
        _id
        name
      }
      expense {
        _id
        description
        category
        totalPrice
        participants {
          data {
            _id
            user {
              _id
              name
            }
          }
        }
      }
      debt {
        _id
        description
        category
        debt
        creditor {
          _id
          name
        }
      }
    }
  }
`;

export const ADD_GROUP_EXPENSE_ACTIVITY = gql`
  mutation addActivity(
    $userId: ID!
    $type: String
    $name: String
    $groupId: ID
    $expenseId: ID
  ) {
    createActivity(
      data: {
        user: { connect: $userId }
        type: $type
        name: $name
        group: { connect: $groupId }
        expense: { connect: $expenseId }
      }
    ) {
      _id
      type
      name
      group {
        _id
        name
      }
      expense {
        _id
        description
        category
        totalPrice
        participants {
          data {
            _id
            user {
              _id
              name
            }
          }
        }
      }
      debt {
        _id
        description
        category
        debt
        creditor {
          _id
          name
        }
      }
    }
  }
`;

export const ADD_NON_GROUP_DEBT_ACTIVITY = gql`
  mutation addActivity(
    $userId: ID!
    $name: String
    $type: String
    $debtId: ID
  ) {
    createActivity(
      data: {
        user: { connect: $userId }
        type: $type
        name: $name
        debt: { connect: $debtId }
      }
    ) {
      _id
      type
      name
      group {
        _id
        name
      }
      expense {
        _id
        description
        category
        totalPrice
        participants {
          data {
            _id
            user {
              _id
              name
            }
          }
        }
      }
      debt {
        _id
        description
        category
        debt
        creditor {
          _id
          name
        }
      }
    }
  }
`;

export const ADD_EXPENSE = gql`
  mutation addExpense(
    $userId: ID!
    $activityName: String
    $description: String
    $category: String
    $totalPrice: Int
  ) {
    createActivity(
      data: {
        user: { connect: $userId }
        name: $activityName
        type: "expense"
        expense: {
          create: {
            description: $description
            category: $category
            totalPrice: $totalPrice
          }
        }
      }
    ) {
      _id
      expense {
        _id
        description
        category
        totalPrice
      }
    }
  }
`;

export const ADD_DEBT = gql`
  mutation addDebt(
    $userId: ID!
    $activityName: String
    $description: String
    $category: String
    $debt: Int
    $creditorId: ID
  ) {
    createActivity(
      data: {
        user: { connect: $userId }
        name: $activityName
        type: "debt"
        debt: {
          create: {
            description: $description
            category: $category
            debt: $debt
            creditor: { connect: $creditorId }
          }
        }
      }
    ) {
      _id
      debt {
        _id
        description
        category
        debt
        creditor {
          _id
          name
        }
      }
    }
  }
`;
//#endregion group

export const DELETE_ACTIVITY = gql`
  mutation deleteActivity($activityId: ID!) {
    deleteActivity(id: $activityId) {
      _id
      name
    }
  }
`;

export const DELETE_EXPENSE = gql`
  mutation deleteExpense($expenseId: ID!) {
    deleteExpense(id: $expenseId) {
      _id
      description
    }
  }
`;

export const DELETE_DEBT = gql`
  mutation deleteDebt($debtId: ID!) {
    deleteDebt(id: $debtId) {
      _id
      description
    }
  }
`;

export const DELETE_PARTICIPANT = gql`
  mutation deleteParticipant($participantId: ID!) {
    deleteParticipant(id: $participantId) {
      _id
      share
    }
  }
`;
