import React from "react";

import "./ItemAddForm.css";

function postData(url = '', data = {}) {
  return fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(data), 
  })
  .then(response => response.json());
}

class ItemAddForm extends React.Component {
  maxId = 101;

  state = {
    label: ""
  };

  createItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }

  onLabelChange = event => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.label.length < 1) return;
    if (this.state.label.split(" ").length - 1 === this.state.label.length) {
      return;
    }
    let tast = this.createItem(this.state.label);
    this.props.onCreate(tast);
    let obj = { 
      name: this.props.prop.user.name,
      todo: this.props.prop.page.todoData
    }
    console.log(obj);
    postData( '/todos', obj).then(data=> console.log(data))
    this.setState({ label: "" });

  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit} method="post">
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="Что Вы хотите сделать?"
          value={this.state.label}
        />
        <button className="btn btn-outline-secondary btn-size">
          Добавить задачу
        </button>
      </form>
    );
  }
}

export default ItemAddForm;
