import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_PLANNED_TRANSACTION_MUTATION = gql`
  mutation DeletePlannedTransactionMutation($id: Int!) {
    deletePlannedTransaction(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const PlannedTransaction = ({ plannedTransaction }) => {
  const [deletePlannedTransaction] = useMutation(
    DELETE_PLANNED_TRANSACTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('PlannedTransaction deleted')
        navigate(routes.plannedTransactions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete plannedTransaction ' + id + '?')
    ) {
      deletePlannedTransaction({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            PlannedTransaction {plannedTransaction.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{plannedTransaction.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{plannedTransaction.name}</td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>{plannedTransaction.amount}</td>
            </tr>
            <tr>
              <th>Category id</th>
              <td>{plannedTransaction.categoryId}</td>
            </tr>
            <tr>
              <th>Icon</th>
              <td>{plannedTransaction.icon}</td>
            </tr>
            <tr>
              <th>Timeframe id</th>
              <td>{plannedTransaction.timeframeId}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{timeTag(plannedTransaction.deleted)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPlannedTransaction({ id: plannedTransaction.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(plannedTransaction.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default PlannedTransaction
