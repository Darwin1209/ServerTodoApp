import React from 'react';
import './Header.css'

class Header extends React.Component {
    state = {
        isLogin : false,
        name: "Аноним",
    };

    render () {

        const { isLogin, name } = state;

        if (isLogin) {
            button = <LogoutButton/>;
          } else {
            button = <LoginButton/>;
          }

        return (
            <div className = "Header">
                <ul>
                    <li>Главная</li>
                    <li>Мой список дел</li>
                    <li>Авторизация</li>
                </ul>
                <p>Привет, { name } {button}</p>
            </div>
        )
    }
}