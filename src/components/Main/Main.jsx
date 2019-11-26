import React from 'react';

import "./Main.css";

class Main extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <h1 className="wrapper__h1">Удобный задачник</h1>
                    <h2>В нём вы можете:</h2>
                    <div>   
                        <ul>
                            <li>* Добавлять свои задачи</li>
                            <li>* Отмечать их как важные</li>
                            <li>* Фильтровать их</li>
                            <li>* Искать нужные</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;