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

const TimeframeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.timeframe?.id)
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
          defaultValue={props.timeframe?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="days"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Days
        </Label>

        <NumberField
          name="days"
          defaultValue={props.timeframe?.days}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="days" className="rw-field-error" />

        <Label
          name="monthSplits"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Month splits
        </Label>

        <NumberField
          name="monthSplits"
          defaultValue={props.timeframe?.monthSplits}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="monthSplits" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>

        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.timeframe?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="date" className="rw-field-error" />

        <Label
          name="deleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted
        </Label>

        <DatetimeLocalField
          name="deleted"
          defaultValue={formatDatetime(props.timeframe?.deleted)}
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

export default TimeframeForm
