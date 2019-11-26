import React from 'react';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { verificateUser } from '../../actions/UserActions';

import './AutorizForm.css';

const required = value => {
    return (value ? undefined : 'Поле должно быть заполнено')
};

class AutorizForm extends React.Component {

    onSubmit = values => {
        console.log(values);
        this.props.verificateUser(values);
        values = null;
    }

    render() {
        let error = undefined;
        let { status } = this.props.user;
        if (status === "OK") {
            return <Redirect push to="/" />;
        } else if (status === "NO_USER") {
            error = <h2 className="error">Такого пользователя не существует</h2>
        } else if (status === "INVALID_PASSWORD") {
            error = <h2 className="error">Неверный пароль</h2>
        }

        return(
            <div className="wrapper">
                <Form
                onSubmit={this.onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <div className="block">    
                        <form onSubmit={handleSubmit} className="form-inner">
                            <h1>Авторизация</h1>
                            <Field name="login" validate={required}>
                                {({ input, meta }) => (
                                <div>
                                    <label className="my__label" htmlFor="log">Ваш логин</label>
                                    <input className="my__input" {...input} type="text" placeholder="Ваш логин" id="log"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                                )}
                            </Field>
                            <Field name="password" validate={required}>
                                {({ input, meta }) => (
                                <div>
                                    <label className="my__label" htmlFor="pas">Ваш пароль</label>
                                    <input className="my__input" {...input} type="password" placeholder="Ваш пароль" id="pas"/>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                                )}
                            </Field>
                            <label htmlFor="custom-checkbox">
                                <Field
                                name="checked"
                                component="input"
                                type="checkbox"
                                value="true"
                                id="custom-checkbox"
                                />{' '}
                                Запомнить меня?
                            </label>
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Войти
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                />
                {error}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      user: store.user,
    };
  };
  
  
  const mapDispatchToProps = dispatch => bindActionCreators({
      verificateUser
  },dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AutorizForm);