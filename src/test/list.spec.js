import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../components/TodoList';

describe('TodoList', () => {
    const props = {
        todo: [
            {
                "label": "Создать главную страницу и Footer",
                "important": true,
                "done": true,
                "id": "2019-11-20T10:29:16.041Z"
              },
              {
                "label": "Создать авторизацию и регистрацию",
                "important": true,
                "done": true,
                "id": "2019-11-19T22:21:09.524Z"
              },
              {
                "label": "Написать тесты",
                "important": true,
                "done": false,
                "id": "2019-11-19T22:21:16.671Z"
              }
        ]
    }

    const todoList = shallow(<TodoList {...props}/>);
    it('render footer name', () => {
        expect(todoList.find('TodoList')).toHaveLength(3);
    });
})