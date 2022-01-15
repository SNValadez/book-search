const { gql } = require("apollo-server-express");

const typeDefs = gql`

type Query {
    me: User
    # users: [User]
    # user(username: String!): User
    # thoughts(username: String): [Thought]
    # thought(_id: ID!): Thought
  }


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookText: String!): User
    removeBook(bookId: ID!): User
    # addFriend(friendId: ID!): User
  }

  type User {
      _id: []
      username:
      email:
      bookCount:
      savedBooks: [Book]
  }

  type Book {
      bookId:
      authors:
      description:
      title:
      image:
      link:
  }

  type Auth {
      token:
      user: User
  }
`
module.exports = typeDefs;