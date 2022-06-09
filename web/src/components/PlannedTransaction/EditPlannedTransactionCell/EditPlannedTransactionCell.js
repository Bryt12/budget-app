import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import PlannedTransactionForm from 'src/components/PlannedTransaction/PlannedTransactionForm'

export const QUERY = gql`
  query EditPlannedTransactionById($id: Int!) {
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
const UPDATE_PLANNED_TRANSACTION_MUTATION = gql`
  mutation UpdatePlannedTransactionMutation(
    $id: Int!
    $input: UpdatePlannedTransactionInput!
  ) {
    updatePlannedTransaction(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plannedTransaction }) => {
  const [updatePlannedTransaction, { loading, error }] = useMutation(
    UPDATE_PLANNED_TRANSACTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlannedTransaction updated')
        navigate(routes.plannedTransactions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      categoryId: parseInt(input.categoryId),
      timeframeId: parseInt(input.timeframeId),
    })
    updatePlannedTransaction({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit PlannedTransaction {plannedTransaction.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlannedTransactionForm
          plannedTransaction={plannedTransaction}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
