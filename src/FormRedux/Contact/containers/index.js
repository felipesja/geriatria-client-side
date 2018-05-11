import React, { Component } from 'react'
import Form from './../components/Form'
import { reset } from 'redux-form'
import { connect } from 'react-redux'
import { contactSent } from './../index'
import './index.css'


class Contact extends Component {
  handleSubmit = (values, dispatch) => {
    dispatch(contactSent(values))
    dispatch(reset('contactForm'))
  }

  render() {
    const { data } = this.props

    return (
      <div className="container text-center">
        <h2 className="h2-titulo">Contato</h2>
        <div className="titulo-descricao">Entre em contato utilizando o formulário abaixo</div>
        <Form onSubmit={this.handleSubmit} />
        <div hidden>Form data: {data ? JSON.stringify(data) : null}</div>
      </div>
    )
  }
}

export default connect(state => state.Contact)(Contact)
