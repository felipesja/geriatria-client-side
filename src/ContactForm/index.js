import './index.css'
import Form from './Form'

function ContactForm() {
  return (
    <div className="container custom-container text-center">
      <h2 className="h2-titulo">Contato</h2>
      <div className="titulo-descricao">
        Entre em contato utilizando o formulário abaixo ou pelo nosso&nbsp;
        <a 
          href="https://api.whatsapp.com/send?phone=5521993960900&text=Ol%C3%A1,%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es" 
          rel="noopener noreferrer" 
          target="_blank"
        >
          whatsapp
        </a>
      </div>
      <Form />
    </div>
  )
}

export default ContactForm
