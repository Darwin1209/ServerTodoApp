import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from "../Page";
import Header from "../Header";
import AutorizForm from "../AutorizForm";
import Main from "../Main";
import Footer from "../Footer";

import { localUser } from "../../actions/UserActions";

import "./App.css";

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem("user") !== null) {
      this.props.localUser(localStorage.getItem("user"));
    }
  }

  render() {

    return (
      <div className="app">
        <Router>
          <Header user = { this.props.user.name }/>
          <Route 
            path="/" 
            render={() => (
              <Main/>
            )}
            exact/>
          <Route 
            path="/todoList" 
            render={() => (
              <Page/>
            )}
          />
          <Route 
            path="/registration"
            render={() => (
              <AutorizForm/>
            )}
            />
          <Footer />
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
  return {
    user: store.user,
  };
};


const mapDispatchToProps = dispatch => bindActionCreators({
    localUser,
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);