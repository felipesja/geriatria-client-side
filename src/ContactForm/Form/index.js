import React from 'react'
import './index.css'
import axios from 'axios'
import swal from 'sweetalert2'


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      telefone: '',
    };
  }

  handletelefoneChange = (e) => {
    let numTel = e.target.value
    numTel = numTel.replace(/\D/g, "");                  //Remove tudo o que não é dígito
    numTel = numTel.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    numTel = numTel.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    this.setState({ telefone: numTel });
  }

  handleFormReset = () => {
    this.setState({ telefone: '' });
  }

  // handleChange = (e) => {
  //   // const state = this.state
  //   // state[e.target.name] = e.target.value;
  //   // this.setState(state);
  // }

  handleSubmit = (e) => {

    // get our form data out of state
    const name = e.target.name.value
    const telefone = e.target.telefone.value
    const email = e.target.email.value
    const message = e.target.message.value

    swal({
      title: 'Enviando...',
      onOpen: () => {
        swal.showLoading()
      }
    })
    
    axios.post('https://**url**.cloudfunctions.net/enviarEmail', { name, email, telefone, message })
      .then(result => {
        console.log('Request success: ' + result);
        swal({
          title: 'Mensagem enviada com sucesso!',
          text: 'Logo em breve entraremos em contato!',
          type: 'success',
          showConfirmButton: false,
          timer: 2500
        });

      }).catch(error => {
        console.error('Request Error: ' + error);
        swal({
          title: 'Não foi possível enviar a Mensagem!',
          text: 'Entre em contato pelos nossos telefones.',
          type: 'error',
          showConfirmButton: false,
          timer: 2500
        });
      })

    e.preventDefault();
  }

  render() {

    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit} onReset={this.handleFormReset}>
        <div className="row">
          <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <input className="form-control" placeholder="Nome" type="text" name="name" required />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <input className="form-control" placeholder="E-mail" type="email" name="email" required />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <input className="form-control" placeholder="Telefone (com DDD)" type="telefone" name="telefone" value={this.state.telefone} onChange={this.handletelefoneChange} required />
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <textarea className="form-control" placeholder="Mensagem" name="message" rows="6" required />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">Enviar</button>
            {/* {loading ? <LoadingSpinner /> : <button type="submit" className="btn btn-primary">Enviar</button>} */}
            <button type="reset" className="btn btn-default">Limpar</button>
          </div>
        </div>
      </form>
    )
  }
}
export default Form
