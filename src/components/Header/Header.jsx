import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

const LogoutButton = (user, onLogOut) => {
  return (
    <div className="header-user">
      <p>Привет, {user}</p>
      <button onClick={() => onLogOut}>Выйти</button>
    </div>
  )
}

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
  state = {
    isLogin: false,
    name: "Аноним"
  };

  
  onLogOut = () => {
    console.log('aaa');
  }
  onRegistr = () => {
    console.log('aaa');
  }

  render() {
    const { isLogin, name } = this.state;
    let button
    if (isLogin) {
      button = <LogoutButton user={name} onLogOut = {this.onLogOut}/>;
    } else {
      button = <LoginButton onLogIn={this.onLogIn} onRegistr={this.onRegistr}/>;
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
