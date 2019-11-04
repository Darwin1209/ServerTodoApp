import React from 'react';

import './ItemAddForm.css';

class ItemAddForm extends React.Component {

    maxId = 101;
    state = {
        label: ''
    }

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        let tast = this.createItem(this.state.label);
        this.props.onCreate(tast);
        this.setState ( {label: '' });
    }

    render() {
        
        return (
            <form className="item-add-form d-flex"
                  onSubmit={ this.onSubmit }>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Что Вы хотите сделать?"
                       value={this.state.label}
                 />
                <button className="btn btn-outline-secondary btn-size"> 
                    Добавить задачу
                </button>
            </form>
        )
    }
}

export default ItemAddForm;