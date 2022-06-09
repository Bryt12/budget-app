import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import PlannedTransactionForm from 'src/components/PlannedTransaction/PlannedTransactionForm'

const CREATE_PLANNED_TRANSACTION_MUTATION = gql`
  mutation CreatePlannedTransactionMutation(
    $input: CreatePlannedTransactionInput!
  ) {
    createPlannedTransaction(input: $input) {
      id
    }
  }
`

const NewPlannedTransaction = () => {
  const [createPlannedTransaction, { loading, error }] = useMutation(
    CREATE_PLANNED_TRANSACTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlannedTransaction created')
        navigate(routes.plannedTransactions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
      timeframeId: parseInt(input.timeframeId),
    })
    createPlannedTransaction({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New PlannedTransaction
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlannedTransactionForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewPlannedTransaction
