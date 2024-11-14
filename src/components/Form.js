import React, { useState } from 'react';

function Form(props){
    const [formData, setFormData] = useState({
        nom:"",
        prenom:"",
        mail:"",
        commentaire:"",
    });

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

        setFormData({
            nom:"",
            prenom:"",
            mail:"",
            commentaire:"",
        });
    }

    return (
        <>
            <form method="post" id="formContact" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulaire de contact:</legend>
                    <label htmlFor='formContactNom'>Nom:</label>
                    <input type="text" id="formContactNom" value={formData.nom} name="nom" onChange={handleInputChange}></input>
                    <label htmlFor='formContactPrenom'>Prenom:</label>
                    <input type="text" id="formContactPrenom" value={formData.prenom} name="prenom" onChange={handleInputChange}></input>
                    <label htmlFor='formContactMail'>Mail:</label>
                    <input type="email" id="formContactMail" value={formData.mail} name="mail" onChange={handleInputChange}></input>
                    <label htmlFor='formContactCommentaire'>Commentaire:</label>
                    <textarea id="formContactCommentaire" value={formData.commentaire} name="commentaire" onChange={handleInputChange}></textarea>
                    <input type="submit" value="Valider"/>
                </fieldset>
            </form>
        </>
    );
}

export default Form;