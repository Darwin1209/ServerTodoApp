import React from 'react';
import './AppHeader.css'


const AppHeader = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Cписок дел</h1>
            <h2>{toDo} нужно сделать, {done} уже сделано</h2>
        </div>
    );
};

export default AppHeader;
