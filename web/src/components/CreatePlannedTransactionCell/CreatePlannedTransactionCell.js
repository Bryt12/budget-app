import CreatePlannedTransactionForm from 'src/components/CreatePlannedTransactionForm'

export const QUERY = gql`
  query FindInformationQuery {
    timeframes {
      date
      days
      deleted
      id
      monthSplits
      name
    }
    categories {
      color
      deleted
      icon
      id
      name
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  timeframes,
  categories,
  updateCategoryForm,
  isOpenCategory,
}) => {
  return (
    <CreatePlannedTransactionForm
      categories={categories}
      timeframes={timeframes}
      updateCategoryForm={updateCategoryForm}
      isOpenCategory={isOpenCategory}
    />
  )
}
