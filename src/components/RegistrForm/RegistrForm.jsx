import React from 'react';
import { Form, Field } from 'react-final-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registrUser } from '../../actions/UserActions';
import { Redirect } from 'react-router';


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

class RegistrForm extends React.Component {

    onSubmit = values => {
        this.props.registrUser(values);
        console.log(values);
    }
    
    render() {
        let error = undefined;
        let { status } = this.props.user;
        if (status === "OK") {
            return <Redirect push to="/" />;
        } else if (status === "LOGIN") {
            error = <h2 className="error">Такой логин уже занят</h2>
        }
        return(
            <div className="wrapper">
                <Form
                    onSubmit={this.onSubmit}
                    validate={values => {
                        const errors = {}
                        if (!values.login) {
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
                        <div className="block">
                            <form onSubmit={handleSubmit} className="form-inner">
                                <h1>Регистрация</h1>
                                <Field name="login">
                                    {({ input, meta }) => (
                                    <div>
                                        <label className="my__label">Ваш логин</label>
                                        <input className="my__input" {...input} type="text" placeholder="Ваш логин" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                                <Field name="password">
                                    {({ input, meta }) => (
                                    <div>
                                        <label className="my__label">Ваш пароль</label>
                                        <input className="my__input" {...input} type="password" placeholder="Ваш пароль" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                                <Field name="confirm">
                                    {({ input, meta }) => (
                                    <div>
                                        <label className="my__label">Подтверждение пароля</label>
                                        <input className="my__input" {...input} type="password" placeholder="Подтвердите пароль" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                    )}
                                </Field>
                                <div className="buttons">
                                    <button type="submit" disabled={submitting}>
                                        Зарегистрироваться
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
    registrUser
  },dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegistrForm);
