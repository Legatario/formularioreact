import React from 'react';
import './inputs.css'

const DocumentTypeField = ({ label, name, id, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <div className="select-wrapper">
        <select 
          id={id} 
          name={name} 
          value={value} 
          onChange={onChange}
        >
          <option value="">Selecione</option>
          <option value="RG">RG</option>
          <option value="Passaporte">Passaporte</option>
          <option value="CNH">CNH</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
    </div>
  );
};

export default DocumentTypeField;