import { IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonModal, IonContent, IonListHeader, IonLabel, IonAlert } from '@ionic/react';
import { addCircle } from "ionicons/icons";
import React, { useState} from 'react';
import ModalTodo from '../components/ModalTodo';
import TodoList from '../components/TodoList';
import './Home.css';

const Home: React.FC = () => {
    const [todoList, setTodoList] = useState(Array<{id: number, name: string}>());
    const [todo, setTodo] = useState({id: '', name: ''});
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    function newTodo() {
        setTodo({ id: '', name: '' });
        setShowModal(true);
    }

    function createTodo(newTodo:any) {
        setTodoList([ ...todoList, newTodo ])
        setShowAlert(true);
    }

    function editTodo(todoTarget:any) {
        setTodo(todoTarget);
        setShowModal(true);
    }

    function updateTodo(updateTodo:any) {
        let newTodoList = todoList;
        newTodoList.forEach((todo, index) => {
            if (todo.id === updateTodo.id) { newTodoList[index] = updateTodo }
        })
        setTodoList(newTodoList);
        setShowAlert(true);
    }

    function removeTodo(todoToRemove:any) {
        setTodoList(todoList.filter(todo => todo.id !== todoToRemove.id));
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
                    <IonIcon size="26" icon={addCircle} onClick={() => newTodo()} />
                </div>
            </IonListHeader>
            <TodoList list={todoList} editTodo={editTodo} removeTodo={removeTodo}/>
        </IonContent>
        <IonContent>
            <IonModal isOpen={showModal}>
                <ModalTodo createTodo={createTodo}  updateTodo={updateTodo} showModal={setShowModal} todoEdit={todo} />
            </IonModal>
        </IonContent>
        <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={'Muito bem'}
            message={'Feito com sucesso!'}
            buttons={['OK']}
        />

    </IonPage>
    );
};

export default Home;
