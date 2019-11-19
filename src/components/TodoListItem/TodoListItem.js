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
  render() {
    const {
      label,
      deleteItemAction,
      onToggleImportant,
      onToggleDone,
      done,
      important,
      setTodoFetch,
      id,
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
        <span className="todo-list-item-label" onClick={()=>onToggleDone(id)}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={()=> onToggleImportant(id)}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={()=> deleteItemAction(id)}
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
