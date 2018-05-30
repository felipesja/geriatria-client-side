import React from 'react'
import './index.css'
import Form from './Form'

class ContactForm extends React.Component {

  render() {
    return (
      <div className="container text-center">
        <h2 className="h2-titulo">Contato</h2>
        <div className="titulo-descricao">Entre em contato utilizando o formulário abaixo</div>
        <Form />
      </div>
    )
  }
}
export default ContactForm
