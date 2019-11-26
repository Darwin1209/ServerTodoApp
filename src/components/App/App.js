import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from "../Page";
import Header from "../Header";
import AutorizForm from "../AutorizForm";
import RegistrForm from "../RegistrForm";
import Main from "../Main";
import Footer from "../Footer";

import { localUser } from "../../actions/UserActions";
import { getTodo } from "../../actions/PageActions"; 

import "./App.css";

class App extends React.Component {

  componentDidMount() {
    if (localStorage.getItem("user") !== null) {
      this.props.localUser(localStorage.getItem("user"));
      this.props.getTodo(localStorage.getItem("user"));
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
            path="/autorization"
            render={() => (
              <AutorizForm/>
            )}
          />
          <Route 
            path="/registration"
            render={() => (
              <RegistrForm/>
            )}
          />
          <Footer />
        </Router>        
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  };
};


const mapDispatchToProps = dispatch => bindActionCreators({
    localUser,
    getTodo,
},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);