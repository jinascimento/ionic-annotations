import React, { useState } from 'react';
import {IonButton, IonContent, IonHeader, IonInput, IonTitle, IonToolbar} from '@ionic/react';
import crypto from 'crypto';
import './ModalTodo.css';

const ModalTodo = (props:any) => {
    const [todo, setTodo] = useState(props.todoEdit);

    function handleNameTodoChange(e:any) {
        setTodo({ ...todo, name: e.target.value});
    }

    function handleSubmit() {
        if (todo.id === '') {
            props.createTodo({ id: crypto.randomBytes(256), name: todo.name });
        } else {
            props.updateTodo(todo);
        }
        props.showModal(false);
    }

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle size="large">Adicionar anotação</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <form>
                    <IonInput placeholder="Anotação"
                              value={todo.name}
                              onIonChange={(e) => handleNameTodoChange(e)}
                    />
                    <div className="button-actions">
                    <IonButton
                        expand="block"
                        color="primary"
                        type="button" onClick={() => handleSubmit()}>Salvar
                    </IonButton>
                        <IonButton
                            expand="block"
                            color="primary"
                            type="button" onClick={() => props.showModal(false)}>Fechar
                        </IonButton>
                    </div>
                </form>
            </IonContent>
        </>
    );
};

export default ModalTodo;
