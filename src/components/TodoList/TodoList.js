import React from 'react';
import TodoListItem from '../TodoListItem'
import './TodoList.css';

const TodoList = ({todo, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todo.map((item) => {

        const { id , ...itemProps } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem 
                    {...itemProps} 
                    onDeleted = {() => onDeleted(id)}
                    onToggleDone = {() => onToggleDone(id)}
                    onToggleImportant = {() => onToggleImportant(id)}
                />
            </li>
        );
    })

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
