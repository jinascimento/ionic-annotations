import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput } from '@ionic/react';
import './ModalTodo.css';

const ModalTodo = (props:any) => {
    const [todoName, setTodoName] = useState('');

    function handleNameTodoChange(e:any) {
        setTodoName(e.target.value)
    }

    function handleSubmit() {
        props.addTodo({name: todoName});
    }

    return (
        <>
            <IonHeader>
                Adicionar anotação
            </IonHeader>
            <IonContent className="ion-padding">
                <form>
                    <IonInput placeholder="Anotação"
                              value={todoName}
                              onIonChange={(e) => handleNameTodoChange(e)}
                    />
                    <div>
                    <IonButton
                               color="primary"
                               type="button" onClick={() => handleSubmit()}
                    >Salvar</IonButton>
                        <IonButton
                                   color="primary"
                                   type="button" onClick={() => props.showModal(false)}
                        >Fechar</IonButton>
                    </div>
                </form>
            </IonContent>
        </>
    );
};

export default ModalTodo;
