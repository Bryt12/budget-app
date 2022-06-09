import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import TimeframeForm from 'src/components/Timeframe/TimeframeForm'

export const QUERY = gql`
  query EditTimeframeById($id: Int!) {
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
const UPDATE_TIMEFRAME_MUTATION = gql`
  mutation UpdateTimeframeMutation($id: Int!, $input: UpdateTimeframeInput!) {
    updateTimeframe(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ timeframe }) => {
  const [updateTimeframe, { loading, error }] = useMutation(
    UPDATE_TIMEFRAME_MUTATION,
    {
      onCompleted: () => {
        toast.success('Timeframe updated')
        navigate(routes.timeframes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTimeframe({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Timeframe {timeframe.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TimeframeForm
          timeframe={timeframe}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
