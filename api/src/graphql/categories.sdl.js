export const schema = gql`
  type Category {
    id: Int!
    name: String!
    color: String!
    icon: String!
    User: User!
    userId: Int!
    PlannedTransaction: [PlannedTransaction]!
    deleted: DateTime
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    color: String!
    icon: String!
    userId: Int!
    deleted: DateTime
  }

  input UpdateCategoryInput {
    name: String
    color: String
    icon: String
    userId: Int
    deleted: DateTime
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
