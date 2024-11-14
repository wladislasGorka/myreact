import React, { useState } from 'react';
import Form from './Form';

function Contact(){
    let inputList = [
        {formName:"formContactNom",name:"nom",type:"text", label:"Nom"},
        {formName:"formContactPrenom",name:"prenom",type:"text", label:"Prenom"},
        {formName:"formContactMail",name:"mail",type:"email", label:"Mail"},
        {formName:"formContactCommentaire",name:"commentaire",type:"textarea", label:"Commentaire"}
    ];
    const emptyDatas = inputList.reduce((acc,cur) => ({...acc, [cur.name]:""}), {});

    const [datas, setDatas] = useState(emptyDatas);

    const handleFormSubmit = (data) => {
        setDatas(data);
    };

    return (
        <>
            <header>
                <h1>Contact</h1>
            </header>
            <section>                
                <Form onSubmit={handleFormSubmit} inputList={inputList}/>
                {datas.nom && (
                    <article>
                        <h3>Votre demande sera traitée avec une grande attention!</h3>
                        <p>Rappel des informations que vous avez saisies</p>
                        {Object.entries(datas).map(([cle, valeur]) => (
                            <p key={cle}>
                            <strong>{cle}:</strong> {valeur}
                            </p>
                        ))}
                    </article>
                )}
            </section>
        </>
    );
}

export default Contact;