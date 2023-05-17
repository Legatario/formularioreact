import React from 'react';
import './inputs.css'


const GenderField = ({label, id, name, value, onChange, required }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <div className="select-wrapper">
        <select 
          id={id} 
          name={name} 
          value={value} 
          onChange={onChange} 
          required= {required}>
          <option value="">Selecione</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
    </div>
  );
};

export default GenderField;