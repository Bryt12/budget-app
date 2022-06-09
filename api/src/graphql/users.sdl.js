export const schema = gql`
  type User {
    id: Int!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    UsersToPlannedTransactions: [UsersToPlannedTransactions]!
    Category: [Category]!
    deleted: DateTime
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }
`
