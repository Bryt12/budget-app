import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_TIMEFRAME_MUTATION = gql`
  mutation DeleteTimeframeMutation($id: Int!) {
    deleteTimeframe(id: $id) {
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

const Timeframe = ({ timeframe }) => {
  const [deleteTimeframe] = useMutation(DELETE_TIMEFRAME_MUTATION, {
    onCompleted: () => {
      toast.success('Timeframe deleted')
      navigate(routes.timeframes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete timeframe ' + id + '?')) {
      deleteTimeframe({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Timeframe {timeframe.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{timeframe.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{timeframe.name}</td>
            </tr>
            <tr>
              <th>Days</th>
              <td>{timeframe.days}</td>
            </tr>
            <tr>
              <th>Month splits</th>
              <td>{timeframe.monthSplits}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(timeframe.date)}</td>
            </tr>
            <tr>
              <th>Deleted</th>
              <td>{timeTag(timeframe.deleted)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editTimeframe({ id: timeframe.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(timeframe.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Timeframe
