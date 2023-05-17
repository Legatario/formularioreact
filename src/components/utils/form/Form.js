import React, { useState } from 'react';
import InputField from "./inputs/InputField";
import './Form.css';
import GenderField from "./inputs/GenderField";
import CivilStatusField from "./inputs/CivilStatusField"
import DocumentType from "./inputs/DocumentesType";
import CpfField from "./inputs/CpfFiel";
import Submission from './submission/Submission';


const Form = () =>{
    const [formData, setFormData] = useState({ nome: '', idade: '', genero: '', estadoCivil: '', tipoDocumento: '', cpf: '', email:'' });

    const [submittedData, setSubmittedData] = useState(null)

    const handleChange = (e) =>{
        //logica para receber o valor de cada input
        const { name , value } = e.target;
        setFormData((prevData) =>({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log(formData)
        const isValidCpf = validateCpf(formData.cpf);
        if (!formData.cpf || isValidCpf) {
            setSubmittedData(formData);
            
            //limpa os campos após o envio do formulario
            setFormData({nome: '', idade: '', genero: '', estadoCivil: '', tipoDocumento: '', cpf: '', email: ''})
          return;
        }
    }

    const validateCpf = (cpf) =>{

        //logica para validar o cpf
        const regex = /^[0-9]{11}/
        return regex.test(cpf)
    };


    return(
        <form onSubmit={handleSubmit}>
            <InputField
                label="Nome"
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
            />

            <InputField
                label="Idade"
                type="number"
                id="idade"
                name="idade"
                value={formData.idade}
                onChange={handleChange}
                required
            />

            <GenderField
                label="Gênero"
                id="genero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required                
            />

            <InputField
                label="E-mail"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <CivilStatusField
                label="Estado Civil"
                name="estadoCivil"
                value={formData.estadoCivil}
                onChange={handleChange}
            />

            <DocumentType 
              label="Tipo de Documento"
              id="tipoDocumento"
              name="tipoDocumento"
              value={formData.tipoDocumento}
              onChange={handleChange}
            />

            <CpfField
                label="CPF"
                value={formData.cpf}
                isValid={validateCpf(formData.cpf)}
                onChange={(cpf) => setFormData({ ...formData, cpf })}
            />
            
            <button type='submit'>Enviar</button>
            {submittedData && <Submission data={submittedData}/>}
        </form>
    )
}

export default Form