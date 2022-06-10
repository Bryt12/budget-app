import { useMutation } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'

import {
  FieldError,
  ColorField,
  Form,
  TextField,
  Submit,
  Label,
  useForm,
} from '@redwoodjs/forms'

import EmojiField from '../EmojiField/EmojiField'
import { toast, Toaster } from '@redwoodjs/web/toast'

const CREATE_CATEGORY = gql`
  mutation CreateCategoryMutation($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      id
    }
  }
`

const CreateCategoryForm = ({ updateCategoryForm }) => {
  const { currentUser } = useAuth()

  const [create, { loading, error }] = useMutation(CREATE_CATEGORY, {
    onCompleted: () => {
      toast.success('Category Created!')
    },
  })

  const onSubmit = async (data) => {
    data.userId = currentUser.id
    create({ variables: { input: data } })

    updateCategoryForm(false)
    formMethods.reset()
  }

  const formMethods = useForm()

  return (
    <>
      {error}
      <Toaster />
      <Form
        config={{ mode: 'onBlur' }}
        onSubmit={onSubmit}
        className="flex flex-col"
        error={error}
        formMethods={formMethods}
      >
        <p className="text-2xl text-gray-700">Create New Category</p>
        <Label name="name" errorClassName="error">
          <p className="textLabel">Name</p>
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="text-gray-700" />

        <Label name="color" errorClassName="error">
          <p className="textLabel">Color</p>
        </Label>
        <ColorField
          name="color"
          errorClassName="error"
          className="textField"
          validation={{ required: true }}
        />
        <FieldError name="color" className="error text-gray-700" />

        <Label name="icon" errorClassName="error">
          <p className="textLabel">Emoji</p>
        </Label>
        <EmojiField
          formMethods={formMethods}
          name="icon"
          validation={{ required: false }}
          errorClassName="error"
        />
        <FieldError name="icon" className="error text-gray-700" />

        <Submit className="btn-primary mt-4">Create</Submit>
      </Form>
    </>
  )
}

export default CreateCategoryForm
