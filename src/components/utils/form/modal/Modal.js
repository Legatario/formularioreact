import React from 'react';
import "./Modal.css"

//chamada para o modal

const Modal = ({ onCloseModal, dataModal }) => {
    return (
      <div className="modal">
        <div className="modal-content">
            <div className='title-content'>
                <h2>Informações da Pessoa</h2>
                <button onClick={onCloseModal}>X</button>
            </div>
          <p>Nome: {dataModal.nome}</p>
            <p>Idade: {dataModal.idade}</p>
            <p>E-mail: {dataModal.email}</p>
            <p>Gênero: {dataModal.genero}</p>
            {dataModal.estadoCivil && <p>Estado Civil: {dataModal.estadoCivil}</p>}
            {dataModal.tipoDocumento && <p>Tipo de Documento: {dataModal.tipoDocumento}</p>}
            {dataModal.cpf && <p>CPF: {dataModal.cpf}</p>}
        </div>
      </div>
    );
  };
  
  export default Modal;