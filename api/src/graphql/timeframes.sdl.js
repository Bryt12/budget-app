export const schema = gql`
  type Timeframe {
    id: Int!
    name: String!
    days: Int
    monthSplits: Int
    date: DateTime
    PlannedTransaction: [PlannedTransaction]!
    deleted: DateTime
  }

  type Query {
    timeframes: [Timeframe!]! @requireAuth
    timeframe(id: Int!): Timeframe @requireAuth
  }

  input CreateTimeframeInput {
    name: String!
    days: Int
    monthSplits: Int
    date: DateTime
    deleted: DateTime
  }

  input UpdateTimeframeInput {
    name: String
    days: Int
    monthSplits: Int
    date: DateTime
    deleted: DateTime
  }

  type Mutation {
    createTimeframe(input: CreateTimeframeInput!): Timeframe! @requireAuth
    updateTimeframe(id: Int!, input: UpdateTimeframeInput!): Timeframe!
      @requireAuth
    deleteTimeframe(id: Int!): Timeframe! @requireAuth
  }
`
