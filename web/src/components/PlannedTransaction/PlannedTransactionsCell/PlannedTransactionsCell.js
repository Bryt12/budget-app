import { Link, routes } from '@redwoodjs/router'

import PlannedTransactions from 'src/components/PlannedTransaction/PlannedTransactions'

export const QUERY = gql`
  query FindPlannedTransactions {
    plannedTransactions {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No plannedTransactions yet. '}
      <Link to={routes.newPlannedTransaction()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plannedTransactions }) => {
  return <PlannedTransactions plannedTransactions={plannedTransactions} />
}
