import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signin extends Component {
  constructor () {
    super()
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit ({ email, password }) {
    console.log(email, password)
    this.props.signinUser({ email, password })
  }

  render () {
    const {
      handleSubmit,
      fields: {
        email,
        password
      },
      auth
    } = this.props

    console.log('is auth??', auth)
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input {...email} className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input {...password} type='password' className='form-control' />
        </fieldset>
        <button action='submit' className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}

function mapStateToProps ({ auth }) {
  return { auth }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin)
