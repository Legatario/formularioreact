import React from 'react';

const Submission = ({ data }) => {
  return (
    <div className="submitted-data">
      <h3>Formulário Enviado:</h3>
      <p>Nome: {data.nome}</p>
      <p>Idade: {data.idade}</p>
      <p>E-mail: {data.email}</p>
      <p>Gênero: {data.genero}</p>
      {data.estadoCivil && <p>Estado Civil: {data.estadoCivil}</p>}
      {data.tipoDocumento && <p>Tipo de Documento: {data.tipoDocumento}</p>}
      {data.cpf && <p>CPF: {data.cpf}</p>}
    </div>
  );
};

export default Submission;