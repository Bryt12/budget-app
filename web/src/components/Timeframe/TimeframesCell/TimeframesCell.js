import { Link, routes } from '@redwoodjs/router'

import Timeframes from 'src/components/Timeframe/Timeframes'

export const QUERY = gql`
  query FindTimeframes {
    timeframes {
      id
      name
      days
      monthSplits
      date
      deleted
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No timeframes yet. '}
      <Link to={routes.newTimeframe()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ timeframes }) => {
  return <Timeframes timeframes={timeframes} />
}
