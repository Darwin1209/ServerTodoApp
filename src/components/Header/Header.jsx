import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import LogoutButton from "../LogoutButton";


class LoginButton extends React.Component{
  
  render() {
    return (
      <div className="header-user">
        <p>Привет, Аноним</p>
        <Link to = '/autorization'>
          <button className="button">Войти</button>
        </Link>
        <Link to = '/registration'>
          <button className="button">Зарегистрироваться</button>
        </Link>
      </div>
    )
  } 
}

class Header extends React.Component { 

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
        </ul>
        {button}
      </div>
    );
  }
}

export default Header;
