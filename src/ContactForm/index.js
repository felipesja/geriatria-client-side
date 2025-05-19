import './index.css'
import Form from './Form'

function ContactForm() {
  return (
    <div className="container custom-container text-center">
      <h2 className="h2-titulo">Contato</h2>
      <div className="titulo-descricao">
        Entre em contato utilizando o formulário abaixo:
      </div>
      <Form />
    </div>
  )
}

export default ContactForm
