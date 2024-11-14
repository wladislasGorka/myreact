import React, { useState } from 'react';
import Form from './Form';

function Contact(){
    const [datas, setDatas] = useState({
        nom:"",
        prenom:"",
        mail:"",
        commentaire:"",
    });

    const handleFormSubmit = (data) => {
        setDatas(data);
    };

    return (
        <>
            <header>
                <h1>Contact</h1>
            </header>
            <section>                
                <Form onSubmit={handleFormSubmit}/>
                {datas.nom && (
                    <article>
                        <h3>Votre demande sera traitée avec une grande attention!</h3>
                        <p>Rappel des informations que vous avez saisies</p>
                        <p>Nom: {datas.nom}</p>
                        <p>Prenom: {datas.prenom}</p>
                        <p>Mail: {datas.mail}</p>
                        <p>Commentaire: {datas.commentaire}</p>
                    </article>
                )}
            </section>
        </>
    );
}

export default Contact;