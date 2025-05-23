import React, { useState } from 'react'
import './index.css'
import axios from 'axios'
import swal from 'sweetalert2'

function Form() {
    const [telefone, setTelefone] = useState('');

    const handletelefoneChange = (e) => {
        let numTel = e.target.value
        numTel = numTel.replace(/\D/g, "");                  //Remove tudo o que não é dígito
        numTel = numTel.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
        numTel = numTel.replace(/(\d)(\d{4})$/, "$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
        setTelefone(numTel);
    }

    const handleFormReset = () => {
        setTelefone('');
    }

    const handleSubmit = (e) => {
        const name = e.target.name.value;
        const telefone = e.target.telefone.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        swal.fire({
            title: 'Enviando...',
            didOpen: () => {
                swal.showLoading();
            }
        });

        axios.post(process.env.REACT_APP_URL_API_PRODUCAO, { name, email, telefone, message })
            .then(result => {
                swal.fire({
                    title: 'Mensagem enviada com sucesso!',
                    text: 'Logo em breve entraremos em contato!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2500
                });

            }).catch(error => {
                swal.fire({
                    title: 'Não foi possível enviar a Mensagem!',
                    text: 'Entre em contato pelos nossos telefones.',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 3500
                });
            });

        e.preventDefault();
    };

    return (
        <form className="form-horizontal" onSubmit={handleSubmit} onReset={handleFormReset}>
            <div className="row">
                <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <input className="form-control" placeholder="Nome" type="text" name="name" required />
                </div>
                <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <input className="form-control" placeholder="E-mail" type="email" name="email" required />
                </div>
                <div className="form-group col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <input className="form-control" placeholder="Telefone (com DDD)" type="telefone" name="telefone" value={telefone} onChange={handletelefoneChange} required />
                </div>
                <div className="form-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <textarea className="form-control" placeholder="Mensagem" name="message" rows="6" required />
                </div>

                <div className="form-buttons">
                    <button type="submit" className="btn-custom btn-primary">Enviar</button>            
                    <button type="reset" className="btn-custom btn-default">Limpar</button>
                </div>
            </div>
        </form>
    )
}

export default Form
