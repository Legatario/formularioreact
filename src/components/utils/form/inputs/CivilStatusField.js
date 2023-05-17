import React from 'react';
import './inputs.css'

const CivilStatusField = ({ label, name, value, onChange, required }) => {
  return (
    <div className="radio-group">
      <label>{label}:</label>
      <div>
        <label>
          <input
            type="radio"
            name={name}
            value="solteiro"
            checked={value === 'solteiro'}
            onChange={onChange}
            required={required}
          />
          Solteiro
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="casado"
            checked={value === 'casado'}
            onChange={onChange}
            required={required}
          />
          Casado
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="divorciado"
            checked={value === 'divorciado'}
            onChange={onChange}
            required={required}
          />
          Divorciado
        </label>
        <label>
          <input
            type="radio"
            name={name}
            value="viuvo"
            checked={value === 'viuvo'}
            onChange={onChange}
            required={required}
          />
          Viúvo
        </label>
      </div>
    </div>
  );
};

export default CivilStatusField;