export const schema = gql`
  type PlannedTransaction {
    id: Int!
    name: String!
    amount: Float!
    Category: Category!
    categoryId: Int!
    icon: String!
    Timeframe: Timeframe!
    timeframeId: Int!
    UsersToPlannedTransactions: [UsersToPlannedTransactions]!
    deleted: DateTime
  }

  type Query {
    plannedTransactions: [PlannedTransaction!]! @requireAuth
    plannedTransaction(id: Int!): PlannedTransaction @requireAuth
  }

  input CreatePlannedTransactionInput {
    name: String!
    amount: Float!
    categoryId: Int!
    icon: String!
    timeframeId: Int!
    deleted: DateTime
  }

  input UpdatePlannedTransactionInput {
    name: String
    amount: Float
    categoryId: Int
    icon: String
    timeframeId: Int
    deleted: DateTime
  }

  type Mutation {
    createPlannedTransaction(
      input: CreatePlannedTransactionInput!
    ): PlannedTransaction! @requireAuth
    updatePlannedTransaction(
      id: Int!
      input: UpdatePlannedTransactionInput!
    ): PlannedTransaction! @requireAuth
    deletePlannedTransaction(id: Int!): PlannedTransaction! @requireAuth
  }
`
