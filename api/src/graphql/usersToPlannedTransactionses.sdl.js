export const schema = gql`
  type UsersToPlannedTransactions {
    id: Int!
    User: User!
    userId: Int!
    PlannedTransaction: PlannedTransaction!
    plannedTransactionId: Int!
    createdAt: DateTime!
    deleted: DateTime
  }

  type Query {
    usersToPlannedTransactionses: [UsersToPlannedTransactions!]! @requireAuth
    usersToPlannedTransactions(id: Int!): UsersToPlannedTransactions
      @requireAuth
  }

  input CreateUsersToPlannedTransactionsInput {
    userId: Int!
    plannedTransactionId: Int!
    deleted: DateTime
  }

  input UpdateUsersToPlannedTransactionsInput {
    userId: Int
    plannedTransactionId: Int
    deleted: DateTime
  }

  type Mutation {
    createUsersToPlannedTransactions(
      input: CreateUsersToPlannedTransactionsInput!
    ): UsersToPlannedTransactions! @requireAuth
    updateUsersToPlannedTransactions(
      id: Int!
      input: UpdateUsersToPlannedTransactionsInput!
    ): UsersToPlannedTransactions! @requireAuth
    deleteUsersToPlannedTransactions(id: Int!): UsersToPlannedTransactions!
      @requireAuth
  }
`
