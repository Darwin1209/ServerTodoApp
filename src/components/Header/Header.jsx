import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";


class Header extends React.Component {
  state = {
    isLogin: false,
    name: "Аноним"
  };

  render() {
    const { isLogin, name } = this.state;

    /*if (isLogin) {
      button = <LogoutButton />;
    } else {
      button = <LoginButton />;
    }*/

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
            <Link to = '/login'>Авторизация</Link>
          </li>
        </ul>
        <p>
          Привет, {name}
        </p>
      </div>
    );
  }
}

export default Header;
