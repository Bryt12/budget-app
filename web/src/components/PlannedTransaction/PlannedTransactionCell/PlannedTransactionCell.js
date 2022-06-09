import PlannedTransaction from 'src/components/PlannedTransaction/PlannedTransaction'

export const QUERY = gql`
  query FindPlannedTransactionById($id: Int!) {
    plannedTransaction: plannedTransaction(id: $id) {
      id
      name
      amount
      categoryId
      icon
      timeframeId
      deleted
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>PlannedTransaction not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plannedTransaction }) => {
  return <PlannedTransaction plannedTransaction={plannedTransaction} />
}
