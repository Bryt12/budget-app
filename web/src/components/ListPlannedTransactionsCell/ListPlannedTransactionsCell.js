export const QUERY = gql`
  query ListPlannedTransactionsQuery {
    listPlannedTransactions {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ listPlannedTransactions }) => {
  return (
    <ul>
      {listPlannedTransactions.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
