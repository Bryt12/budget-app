import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import TimeframeForm from 'src/components/Timeframe/TimeframeForm'

const CREATE_TIMEFRAME_MUTATION = gql`
  mutation CreateTimeframeMutation($input: CreateTimeframeInput!) {
    createTimeframe(input: $input) {
      id
    }
  }
`

const NewTimeframe = () => {
  const [createTimeframe, { loading, error }] = useMutation(
    CREATE_TIMEFRAME_MUTATION,
    {
      onCompleted: () => {
        toast.success('Timeframe created')
        navigate(routes.timeframes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createTimeframe({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Timeframe</h2>
      </header>
      <div className="rw-segment-main">
        <TimeframeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTimeframe
