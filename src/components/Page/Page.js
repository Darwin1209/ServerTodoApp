import React from "react";
import AppHeader from "../AppHeader";
import Search from "../Search";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";
import { connect } from "react-redux";

import {
  setTodo,
  deleteItem,
  doneItem,
  importantItem,
  getTodo
} from "../../actions/PageActions";

import {
  setFilter,
  setTerm
} from "../../actions/FilterActions";

import './Page.css'

function postedData(url = '', data = {}) {
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

function pushBD(name, todoData) {
  let obj = { 
    name: name,
    todo: todoData
  }
  console.log(obj);
  postedData( '/todos', obj).then(data=> console.log(data));
};


class Page extends React.Component {

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.label.toLowerCase().includes(term.toLowerCase()) === true;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter(item => {
          return item.done === false;
        });
      case "done":
        return items.filter(item => {
          return item.done === true;
        });
      default:
        return "all";
    }
  }
  
  componentDidMount() {
    this.props.getTodoAction(this.props.user.name);
  }

  componentDidUpdate( prevProps ) {
    if (this.props.page.todoData === prevProps.page.todoData){
      console.log("Поменялся paage");
      pushBD(this.props.user.name, this.props.page.todoData);
    } console.log(this.props.page.todoData, prevProps.page.todoData)
  }

  render() {
    const { todoData } = this.props.page;
    const { filter, term } = this.props.filter;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;


    return (
      <div className="wrapper">
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="top-panel d-flex">
            <Search onSearchChange={this.props.setTermAction} />
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.props.setFilterAction}
            />
          </div>
          <TodoList
            todo={visibleItems}
            deleteItemAction={this.props.deleteItemAction}
            onToggleDone={this.props.doneItemAction}
            onToggleImportant={this.props.importantItemAction}
          />

          <ItemAddForm prop={this.props} onCreate={this.props.setTodoAction} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
    filter: store.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTodoAction: todo => dispatch(setTodo(todo)),
    setTermAction: term => dispatch(setTerm(term)),
    setFilterAction: filt => dispatch(setFilter(filt)),
    deleteItemAction: id => dispatch(deleteItem(id)),
    doneItemAction: id => dispatch(doneItem(id)),
    importantItemAction: id => dispatch(importantItem(id)),
    getTodoAction: user => dispatch(getTodo(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
