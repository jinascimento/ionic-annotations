import React from 'react';
import './List.css';

interface ContainerProps { }

export const List = (props:any) => {
    return (
        <ul>
            {props.children}
        </ul>

    );
};

export default List;
