import React from 'react';


const Submission = ({ data, onDelete, onModalOpen }) => {
  return (
    <div className="submitted-data">
      <h3>Formulário Enviado:</h3>
      <ul>
            {data.map((data, index) => (
              <div key={index}>
                <p>Nome: {data.nome}</p>
                <p>Idade: {data.idade}</p>
                <p>E-mail: {data.email}</p>
                <p>Gênero: {data.genero}</p>
                {data.estadoCivil && <p>Estado Civil: {data.estadoCivil}</p>}
                {data.tipoDocumento && <p>Tipo de Documento: {data.tipoDocumento}</p>}
                {data.cpf && <p>CPF: {data.cpf}</p>}
                <button onClick={() => onDelete(index)}>Excluir</button>
                <button onClick={() => onModalOpen(data)} className='modalButton'>Modal</button>
              </div>
            ))}
          </ul>
    </div>
  );
};

export default Submission;


