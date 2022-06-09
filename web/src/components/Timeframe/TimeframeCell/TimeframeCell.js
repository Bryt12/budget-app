import Timeframe from 'src/components/Timeframe/Timeframe'

export const QUERY = gql`
  query FindTimeframeById($id: Int!) {
    timeframe: timeframe(id: $id) {
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

export const Empty = () => <div>Timeframe not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ timeframe }) => {
  return <Timeframe timeframe={timeframe} />
}
