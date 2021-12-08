import { extend } from 'vee-validate'
import { required, email, min, max, min_value, max_value } from 'vee-validate/dist/rules'

// No message specified.
extend('email', email)
extend('min', min)
extend('max', max)
extend('min_value', min_value)
extend('max_value', max_value)

// Override the default message.
extend('required', {
  ...required,
  message: 'This field is required'
})

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})
