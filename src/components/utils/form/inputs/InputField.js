import React from 'react';

const InputField = ({label, id, name, value, onChange, required, type}) =>{
    return (
        <div className='form-group'>
            <label htmlFor={id}>{label}:</label>
            <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
        </div>
    )
}

export default InputField