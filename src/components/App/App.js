import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Page from "../Page";
import Header from "../Header";
import RegistForm from "../RegistForm";

import "./App.css";

export default class App extends React.Component {

  render() {

    return (
      <div className="app">
        <Router>
          <Header />
          <Route 
            path="/" 
            render={() => (
              <Page/>
            )}
            exact/>
          <Route 
            path="/fasfasf" 
            render={() => (
              <Page info={this.props.page}/>
            )}/>
          <Route 
            path="/registration"
            render={() => (
              <RegistForm/>
            )}
            />
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