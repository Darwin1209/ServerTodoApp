import React from 'react'

import './ItemAddForm.css'

class ItemAddForm extends React.Component {
  state = {
      label: ''
  };

  createItem (label) {
      return {
          label,
          important: false,
          done: false,
          id: new Date()
      }
  }

  onLabelChange = event => {
      this.setState({
          label: event.target.value
      })
  };

  onSubmit = event => {
      event.preventDefault()
      if (this.state.label.length < 1) return
      if (this.state.label.split(' ').length - 1 === this.state.label.length) {
          return
      }
      let tast = this.createItem(this.state.label)
      this.props.onCreate(tast)
      this.setState({ label: '' })
  };

  render () {
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
      )
  }
}

export default ItemAddForm
