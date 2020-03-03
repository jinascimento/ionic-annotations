import { IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonModal, IonContent, IonListHeader, IonLabel } from '@ionic/react';
import { addCircle, pencil, trash } from "ionicons/icons";
import React, { useState} from 'react';
import ModalTodo from '../components/ModalTodo';
import './Home.css';

const Home: React.FC = () => {
    const [todoList, setTodoList] = useState(Array<{name: string}>());
    const [showModal, setShowModal] = useState(false);

    function addTodo(newTodo:any) {
        setTodoList([ ...todoList, newTodo ])
    }

    function removeTodo(todoToRemove:any) {
        setTodoList(todoList.filter(todo => todo.name !== todoToRemove.name));
    }

    function renderTodos() {
        return todoList.map(todo => (
            <li key={String(todo.name)}>
                <span className="todo-title">{todo.name}</span>
                <IonIcon className="todo-actions" size="26" color="red" icon={pencil} onClick={() => setShowModal(true)}>Plus</IonIcon>
                <IonIcon className="todo-actions" size="26" icon={trash} onClick={() => removeTodo(todo)}>Plus</IonIcon>
            </li>
        ));
    }

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle size="large">Anotações</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonListHeader>
                <div className="container">
                    <IonLabel>Lista de anotações</IonLabel>
                    <IonIcon size="26" icon={addCircle} onClick={() => setShowModal(true)}>Plus</IonIcon>
                </div>
            </IonListHeader>
            <ul>
                {renderTodos()}
            </ul>
        </IonContent>
        <IonContent>
            <IonModal isOpen={showModal}>
                <ModalTodo addTodo={addTodo} showModal={setShowModal}></ModalTodo>
            </IonModal>
        </IonContent>
    </IonPage>
    );
};

export default Home;
