import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from "react-redux";
import {
  setTodo,
  setFilter,
  setTerm,
  deleteItem,
  doneItem,
  importantItem
} from "../../actions/PageActions";

import Page from "../Page";
import Header from "../Header";
import "./App.css";

class App extends React.Component {
  

  render() {

    return (
      <div className="app">
        <Router>
          <Header />
          <Route 
            path="/" 
            render={() => (
              <Page info={this.props}/>
            )}
            exact/>
          <Route 
            path="/fasfasf" 
            render={() => (
              <Page info={this.props.page}/>
            )}/>
        </Router>        
      </div>
    );

    /*return (
      <div className="todo-app">
        <Header />
        <Page />
        <Footer />
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

        <ItemAddForm onCreate={this.props.setTodoAction} />
      </div>
    );*/
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTodoAction: todo => dispatch(setTodo(todo)),
    setTermAction: term => dispatch(setTerm(term)),
    setFilterAction: filt => dispatch(setFilter(filt)),
    deleteItemAction: id => dispatch(deleteItem(id)),
    doneItemAction: id => dispatch(doneItem(id)),
    importantItemAction: id => dispatch(importantItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
