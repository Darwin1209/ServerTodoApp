import React from 'react';
import './TodoListItem.css'

class TodoListItem extends React.Component {
    
    render() {

        const { 
            label, 
            onDeleted, 
            onToggleImportant, 
            onToggleDone,
            done,
            important
        } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
         
        return (
            <div className={ classNames }>
                <span 
                    className="todo-list-item-label"
                    onClick = { onToggleDone }>
                    { label }
                </span>
    
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick = { onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick = { onDeleted }>
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}

export default TodoListItem;
