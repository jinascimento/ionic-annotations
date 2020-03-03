import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonModal, IonContent } from '@ionic/react';
import React, { useState} from 'react';
import ModalTodo from '../components/ModalTodo';
import './Home.css';

const Home: React.FC = () => {
    const [todoList, setTodoList] = useState(Array<{name: string}>());
    const [showModal, setShowModal] = useState(false);

    function renderTodos() {
        return todoList.map(todo => (
            <li key={String(todo.name)}>
                <span>{todo.name}</span>
            </li>
        ));
    }

    function addTodo(newTodo:any) {
        setTodoList([ ...todoList, newTodo ])
    }

    return (
    <IonPage>
        <IonHeader>
            <div className="header-content">
                <IonToolbar>
                    <IonTitle size="large">Anotações</IonTitle>
                </IonToolbar>

                <button onClick={() => setShowModal(true)}>Adicionar</button>
            </div>
        </IonHeader>
        <IonContent>
          <div className="container">
            <div className="content">
                <ul>
                    {renderTodos()}
                </ul>
            </div>
          </div>
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
