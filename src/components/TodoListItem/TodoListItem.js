import React from "react";
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import "./TodoListItem.css";

import {
  deleteItem,
  toogleItem,
} from "../../actions/PageActions";

class TodoListItem extends React.Component {
  onToggleDone = ()=> {
    const {onToggle, id} = this.props
    onToggle(id, "done");
  }

  onToggleImportant = ()=> {
    const {onToggle, id} = this.props
    onToggle(id, "important");
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
  onToggle: toogleItem,
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);
