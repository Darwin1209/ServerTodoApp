import React from 'react';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const required = value => {
    return (value ? undefined : 'Поле должно быть заполнено')
};

const passStrong = value => {
    if (value.length < 9) {
        return ("Пароль слишком короткий");
    }
    let isNum = false;
    let isLow = false;
    let isUpp = false;
    for ( let i = 0; i < value.length; i++ ) {
        if (value[i] >= '0' && value[i] <= '9') isNum = true;
        if (value[i] >= 'a' && value[i] <= 'z') isLow = true;
        if (value[i] >= 'A' && value[i] <= 'Z') isUpp = true;
    }
    if (isNum && isLow && isUpp) {
        return undefined;
    }
    return "Пароль слишком слабый";
}