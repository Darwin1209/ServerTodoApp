import React from 'react';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


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

const RegistrForm = ( ) => {

    const onSubmit = values => {
        alert(values);
    }
    
    return(
        <div className="wrapper">
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                        errors.username = 'Поле обязательное'
                    }
                    if (!values.password) {
                        errors.password = 'Поле обязательное'
                    }
                    if (values.password) {
                        errors.password = passStrong(values.password);
                    }
                    if (!values.confirm) {
                        errors.confirm = 'Поле обязательное'
                    } else if (values.confirm !== values.password) {
                        errors.confirm = 'Пароли должны совпадать'
                    }
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                            <div>
                                <label>Ваш логин</label>
                                <input {...input} type="text" placeholder="Ваш логин" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                            <div>
                                <label>Ваш пароль</label>
                                <input {...input} type="password" placeholder="Ваш пароль" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <Field name="confirm">
                            {({ input, meta }) => (
                            <div>
                                <label>Подтверждение пароля</label>
                                <input {...input} type="password" placeholder="Подтвердите пароль" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Зарегистрироваться
                            </button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}>
                                Сбросить
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}

export default RegistrForm;
