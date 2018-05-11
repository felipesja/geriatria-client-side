import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './Form.css'


const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="row">
        <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Nome"
            className="form-control"
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="E-mail"
            className="form-control"
          />
        </div>
        <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <Field
            name="telefone"
            component="input"
            type="text"
            placeholder="Telefone"
            className="form-control"
          />
        </div>
        <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Field name="message" component="textarea" placeholder="Mensagem" rows="6" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}>
          Enviar
        </button>
        <button
          type="button"
          className="btn btn-default"
          disabled={pristine || submitting}
          onClick={reset}>
          Limpar
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'contactForm'
})(Form)
