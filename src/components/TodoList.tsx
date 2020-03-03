import React from 'react';
import {IonIcon} from "@ionic/react";
import {pencil, trash} from "ionicons/icons";
import './TodoList.css';

interface ContainerProps { }

const TodoList = (props:any) => {
    return (
        <ul>
            {props.list.map((todo: { id: string | number | undefined; name: React.ReactNode; }) => (
                <li key={todo.id}>
                    <span className="todo-title">{todo.name}</span>
                    <IonIcon className="todo-actions" size="26" color="red" icon={pencil} onClick={() => props.editTodo(todo)} />
                    <IonIcon className="todo-actions" size="26" icon={trash} onClick={() => props.removeTodo(todo)} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
