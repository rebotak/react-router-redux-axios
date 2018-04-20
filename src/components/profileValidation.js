import React from 'react';

export const profileValidate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required!'
  }
  if (!values.description) {
    errors.description = 'Required!'
  }
  if (!values.city) {
    errors.city = 'Required!'
  }
  if (!values.province) {
    errors.province = 'Required!'
  }
  if (!values.street) {
    errors.street = 'Required!'
  }
  if (!values.postal_code) {
    errors.postal_code = 'Required!'
  } else if (isNaN(Number(values.postal_code))) {
    errors.postal_code = 'Must be a number!'
  }
  return errors
},
renderField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
      <div>
          <input  className="form-control" {...input} placeholder={label} type={type} />
          {touched &&
            ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))
          }
      </div>
    )

