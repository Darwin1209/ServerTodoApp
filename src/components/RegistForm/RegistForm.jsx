import React from 'react';
import { Form, Field } from 'react-final-form';

import './RegistForm.css';

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
    return "Пароль должен содержать маленьки и большие буквы латинского алфавита, и цифры"
}

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const onSubmit = values => {
    console.log(JSON.stringify(values, 0, 2));
}


const RegistForm = () => (
    <div className="wrapper">
        <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit} className="transparent">
                <div className="form-inner">
                    <Field name="login" validate={required}>
                        {({ input, meta }) => (
                        <div>
                            <label for="log">Ваш логин</label>
                            <input {...input} type="text" placeholder="Ваш логин" id="log"/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <Field name="password" validate={composeValidators(required, passStrong)}>
                        {({ input, meta }) => (
                        <div>
                            <label for="pas">Ваш пароль</label>
                            <input {...input} type="password" placeholder="Ваш пароль" id="pas"/>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <label for="custom-checkbox">
                        <Field
                        name="sauces"
                        component="input"
                        type="checkbox"
                        value="rememb"
                        id="custom-checkbox"
                        />{' '}
                        Запомнить меня?
                    </label>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                        Submit
                        </button>
                        <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                        >
                        Reset
                        </button>
                    </div>
                </div>
            </form>
        )}
        />
    </div>
)

export default RegistForm;