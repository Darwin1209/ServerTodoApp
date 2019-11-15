import React from "react";
import AppHeader from "../AppHeader";
import Search from "../Search";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";

import './Page.css'

export default class Page extends React.Component {

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
  
  render() {
    const { todoData, filter, term } = this.props.info.page;
    const visibleItems = this.filter(this.search(todoData, term), filter);
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="wrapper">
        <div className="todo-app">
          <AppHeader toDo={todoCount} done={doneCount} />
          <div className="top-panel d-flex">
            <Search onSearchChange={this.props.info.setTermAction} />
            <ItemStatusFilter
              filter={filter}
              onFilterChange={this.props.info.setFilterAction}
            />
          </div>
          <TodoList
            todo={visibleItems}
            deleteItemAction={this.props.info.deleteItemAction}
            onToggleDone={this.props.info.doneItemAction}
            onToggleImportant={this.props.info.importantItemAction}
          />

          <ItemAddForm prop={this.props.info} onCreate={this.props.info.setTodoAction} />
        </div>
      </div>
    );
  }
}
