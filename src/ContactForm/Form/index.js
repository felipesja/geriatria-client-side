import React from 'react'
import './index.css'
// import FormData from 'form-data'
import axios from 'axios'

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      telefone: '',
      name: '',
      email:'',
      message:''
    };
    this.telefoneAnt = '';
  }

  handletelefoneChange = (e) => {

    if (this.telefoneAnt.length < e.target.value.length) {
      if (e.target.value.length === 2) {
        this.setState({ telefone: '(' + e.target.value + ')' });
      }
      else if (e.target.value.length === 9) {
        this.setState({ telefone: e.target.value + '-' });
      }
      else {
        this.setState({ telefone: e.target.value });
      }
    }
    else {
      this.setState({ telefone: e.target.value });
    }

    this.telefoneAnt = e.target.value;
  }

  handleFormReset = () => {
    this.setState({ telefone: '' });
  }

  handleChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  handleSubmit = (e) => {
    
    // get our form data out of state
    const { name, email, telefone, message } = this.state;

    axios.post('https://us-central1-geriatria-a7779.cloudfunctions.net/enviarEmail', { name, email, telefone, message })
    // Teste!!
    // axios.post('http://localhost:5000/geriatria-a7779/us-central1/enviarEmail', { name, email, telefone, message }) 
      .then(result => {
        console.log('Request success: ' + result);
        alert("Mensagem enviada com sucesso" + result);
      }).catch(error => {
        console.error('Request Error: ' + error);
      })
    
      e.preventDefault();
  }


  render() {

    //const email = this.state;

    return (
      <form className="form-horizontal" onSubmit={this.handleSubmit} onReset={this.handleFormReset}>
        <div className="row">
          <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <input className="form-control" placeholder="Nome" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <input className="form-control" placeholder="E-mail" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
          </div>
          <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <input className="form-control" placeholder="Telefone" type="telefone" name="telefone" value={this.state.telefone} onChange={this.handleChange} required />
          </div>
          <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <textarea className="form-control" placeholder="Mensagem" name="message" value={this.state.message} rows="6" onChange={this.handleChange} required />
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="reset" className="btn btn-default">Limpar</button>
          </div>
        </div>
      </form>
    )
  }
}
export default Form
