import { gql } from "graphql-request";

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

export const COMPLETE_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    findUserByID(id: $userId) {
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

export const USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    findUserByID(id: $userId) {
      _id
      name
    }
  }
`;

export const USER_FRIENDS = gql`
  query userById($userId: ID!) {
    findUserByID(id: $userId) {
      _id
      friends {
        data {
          _id
          friendId
          friendName
        }
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

export const USER_BY_PHONE = gql`
  query GetUserByPhone($phoneNumber: String!) {
    UserByPhone(phone: $phoneNumber) {
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

export const GET_GROUP_BY_ID = gql`
  query findGroup($groupId: ID!) {
    findGroupByID(id: $groupId) {
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
      activities {
        data {
          _id
          name
        }
      }
    }
  }
`;

export const GET_USER_GROUPS = gql`
  query userById($userId: ID!) {
    findUserByID(id: $userId) {
      _id
      groups {
        data {
          _id
          name
          creator {
            _id
            name
          }
          activities {
            data {
              _id
              type
              group {
                _id
                name
              }
              expense {
                _id
                description
              }
              debt {
                _id
                description
              }
            }
          }
          members {
            data {
              _id
              name
            }
          }
        }
      }
    }
  }
`;
