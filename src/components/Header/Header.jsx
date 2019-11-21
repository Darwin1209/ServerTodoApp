import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import LogoutButton from "../LogoutButton";


class LoginButton extends React.Component{

  onLogIn = () => {
    console.log('aaa');
  }

  onRegistr = () => {
    console.log('bbb');
  }
  
  render() {
    return (
      <div className="header-user">
        <p>Привет, Аноним</p>
        <button className="button" onClick={this.onLogIn}>Войти</button>
        <button className="button" onClick={this.onRegistr}>Зарегистрироваться  </button>
      </div>
    )
  } 
}

class Header extends React.Component { 
  onLogOut = () => {
    console.log('aaa');
  }
  onRegistr = () => {
    console.log('aaa');
  }

  render() {
    const { user } = this.props;
    let button;
    if (user !== "anonim") {
      button = <LogoutButton/>;
    } else {
      button = <LoginButton/>;
    }

    return (
      <div className="header">
        <ul className="header-nav">
          <li>
            <Link to = '/'>Главная</Link>
          </li>
          <li>
            <Link to = '/todoList'>Список дел</Link>
          </li>
          <li>
            <Link to = '/registration'>Авторизация</Link>
          </li>
        </ul>
        {button}
      </div>
    );
  }
}

export default Header;
