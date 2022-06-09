import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const PlannedTransactionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.plannedTransaction?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.plannedTransaction?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="amount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Amount
        </Label>

        <TextField
          name="amount"
          defaultValue={props.plannedTransaction?.amount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="amount" className="rw-field-error" />

        <Label
          name="categoryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>

        <NumberField
          name="categoryId"
          defaultValue={props.plannedTransaction?.categoryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="categoryId" className="rw-field-error" />

        <Label
          name="icon"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Icon
        </Label>

        <TextField
          name="icon"
          defaultValue={props.plannedTransaction?.icon}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="icon" className="rw-field-error" />

        <Label
          name="timeframeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timeframe id
        </Label>

        <NumberField
          name="timeframeId"
          defaultValue={props.plannedTransaction?.timeframeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="timeframeId" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <DatetimeLocalField
          name="deleted"
          defaultValue={formatDatetime(props.plannedTransaction?.deleted)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="deleted" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PlannedTransactionForm
