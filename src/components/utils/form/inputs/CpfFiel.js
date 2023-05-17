import React, {useState} from "react";

const CpfField = ({ label, value, onChange, isValid}) =>{
    const [error, setError] = useState(false)
    const [touched, setTouched] = useState(false);

    const handleCpfChange = (event) =>{
        const cpf = event.target.value
        onChange(cpf)
        setError(false);

    };

    const handleBlur = () =>{
        setTouched(true);
        setError(!validateCpf(value));
    }

    const validateCpf = (cpf) =>{

        //logica para validar o cpf
        const regex = /^[0-9]{11}/
        return regex.test(cpf)
    };

    return(
        <div className="form-group">
            <label>{label}:</label>
            <input 
                type="text" 
                value={value} 
                onChange={handleCpfChange}
                onBlur={handleBlur} 
            />
            {touched && !!value && error && <p className="error-message">CPF inválido</p>}
        </div>
    )
}

export default CpfField