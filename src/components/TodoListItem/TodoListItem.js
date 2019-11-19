import React from "react";
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import "./TodoListItem.css";

import {
  deleteItem,
  doneItem,
  importantItem,
  setTodoFetch
} from "../../actions/PageActions";

class TodoListItem extends React.Component {
  onToggleDone = ()=> {
    const {onToggleDone, id} = this.props
    onToggleDone(id);
  }

  onToggleImportant = ()=> {
    const {onToggleImportant, id} = this.props
    onToggleImportant(id);
  }

  deleteItem = ()=> {
    const { deleteItemAction, id} = this.props
    deleteItemAction(id);
  }

  render() {
    const {
      label,
      done,
      important
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <div className={classNames}>
        <span className="todo-list-item-label" onClick={ this.onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={ this.deleteItem }
        >
          <i className="fa fa-trash-o" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteItemAction: deleteItem,
  onToggleDone: doneItem,
  onToggleImportant: importantItem,
  setTodoFetch: setTodoFetch,
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);
