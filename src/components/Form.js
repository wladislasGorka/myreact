import React, { useState } from 'react';

function Form(props){
    
    
    const emptyDatas = props.inputList.reduce((acc,cur) => ({...acc, [cur.name]:""}), {});
    //console.log(emptyDatas);

    const [formData, setFormData] = useState(emptyDatas);

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setFormData(prevFomData => ({
            ...prevFomData,
            [name]:value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(formData);
        props.onSubmit(formData);

        setFormData(emptyDatas);
    }

    return (
        <>
            <form method="post" id="formContact" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulaire de contact:</legend>
                    {props.inputList.map((inputObject) => {
                        if(inputObject.type==="textarea"){
                            return (
                                <li key={inputObject.formName}>
                                    <label htmlFor={inputObject.formName}>{inputObject.label} : </label><br/>
                                    <textarea id={inputObject.formName} value={formData[inputObject.name]} name={inputObject.name} onChange={handleInputChange} cols="22"></textarea>
                                </li>                            
                            )
                        }
                        return (
                            <li key={inputObject.formName}>
                                <label htmlFor={inputObject.formName}>{inputObject.label} : </label><br/>
                                <input type={inputObject.type} id={inputObject.formName} value={formData[inputObject.name]} name={inputObject.name} onChange={handleInputChange}></input>
                            </li>                            
                        )}
                    )}
                    <br/><input type="submit" value="Valider"/>
                </fieldset>
            </form>
        </>
    );
}

export default Form;