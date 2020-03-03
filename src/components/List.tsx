import React from 'react';
import './List.css';

interface ContainerProps { }

export const List = (props:any) => {
    return (
        <div className="container">
            <ul>
                {props.children}
            </ul>
        </div>
    );
};

export default List;
