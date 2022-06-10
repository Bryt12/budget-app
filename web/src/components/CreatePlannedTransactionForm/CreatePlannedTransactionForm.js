import { MetaTags, useMutation } from '@redwoodjs/web'
// import { useAuth } from '@redwoodjs/auth'

import {
  FieldError,
  Form,
  SelectField,
  TextField,
  Submit,
  Label,
  useForm,
} from '@redwoodjs/forms'

import EmojiField from '../EmojiField/EmojiField'
import CategoryField from '../CategoryField/CategoryField'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_PLANNED_TRANSACTION = gql`
  mutation CreatePlannedTransactionMutation(
    $input: CreatePlannedTransactionInput!
  ) {
    createPlannedTransaction(input: $input) {
      id
    }
  }
`

const CreatePlannedTransactionForm = ({
  timeframes,
  categories,
  updateCategoryForm,
  newCategories,
  isOpenCategory,
}) => {
  // const { currentUser } = useAuth()
  const formMethods = useForm()
  const onSubmit = (data) => {
    data['amount'] = parseFloat(data['amount'])
    data['timeframeId'] = parseInt(data['timeframeId'])
    data['categoryId'] = parseInt(data['categoryId'])

    // data.userId = currentUser.id
    create({ variables: { input: data } })

    formMethods.reset()
  }

  const [create, { loading, error }] = useMutation(CREATE_PLANNED_TRANSACTION, {
    onCompleted: () => {
      toast.success('Planned Transaction Created!')
    },
  })

  return (
    <>
      <MetaTags
        title="CreatePlannedTransactionForm"
        description="Create a new planned transaction"
      />

      <Toaster />
      <Form
        config={{ mode: 'onBlur' }}
        onSubmit={onSubmit}
        className="flex flex-col"
        formMethods={formMethods}
        error={error}
      >
        <p className="text-2xl text-gray-700">Create New Planned Transaction</p>
        <Label name="name" errorClassName="error">
          <p className="textLabel">Name</p>
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="text-gray-700" />

        <Label name="amount" errorClassName="error">
          <p className="textLabel">Amount</p>
        </Label>
        <TextField
          name="amount"
          placeholder="$0.00"
          errorClassName="error"
          className="textField"
          validation={{
            required: true,
            pattern: {
              value: /^\$?(\d*\.?\d{1,2}?)$/,
              message: 'Please enter a valid USD value',
            },
          }}
        />
        <FieldError name="amount" className="error text-gray-700" />

        <Label name="categoryId" errorClassName="error">
          <p className="textLabel">Category</p>
        </Label>
        <CategoryField
          name="categoryId"
          validation={{ required: true }}
          errorClassName="error"
          categories={categories}
          newCategories={newCategories}
          updateCategoryForm={updateCategoryForm}
          isOpenCategory={isOpenCategory}
        />
        <FieldError name="categoryId" className="error text-gray-700" />
        <Label name="icon" errorClassName="error">
          <p className="textLabel">Emoji</p>
        </Label>
        <EmojiField
          name="icon"
          formMethods={formMethods}
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="icon" className="error text-gray-700" />

        <Label name="timeframeId" errorClassName="error">
          <p className="textLabel">Time Frame</p>
        </Label>
        {/* {timeframes[0].name} */}
        <SelectField
          name="timeframeId"
          errorClassName="error"
          className="textField"
          validation={{ required: true }}
        >
          <option value="">Select a time frame</option>
          {timeframes.map((timeframe) => (
            <option key={timeframe.id} value={timeframe.id}>
              {timeframe.name}
            </option>
          ))}
        </SelectField>
        <FieldError name="timeframeId" className="error text-gray-700" />
        <Submit className="btn-primary mt-4">Create</Submit>
      </Form>
    </>
  )
}

export default CreatePlannedTransactionForm
