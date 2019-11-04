import React from 'react';
import { connect } from 'react-redux';
import { setTodo, setFilter, setTerm, deleteItem } from '../../actions/PageActions'

import AppHeader from '../AppHeader';
import Search from '../Search';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';  
import ItemAddForm from '../ItemAddForm';
//import { User } from '../User'
//import { Page } from '../Page'

import './App.css'

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Ты молодец (так Лерося сказала), ты справился, осталось 
только провести рефакторинг, закинув в PAGE
всё что должно иметь доступ к стору, не обязательно
передавать туда пропами доступ к каждому элементу, только
те к которым там необходим доступ, типа в Search
изменение term у стора, но надо решить что делать
с остальными функциями, что работают со View
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


class App extends React.Component {
    
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Создать приложение"),
        ],
        term : '',
        filter: 'all' //all, active, done
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState (({ todoData }) => {
            const idx = todoData.findIndex ( (el) => el.id === id);

            const newArray = [
                ...todoData.slice (0, idx),
                ...todoData.slice (idx + 1)
            ];

            return {
                todoData: newArray
           };
        });
    };

    createItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.props.setTodoAction(newItem);
    };

    toggleProperty (arr, id, propName) {
        const idx = arr.findIndex( (el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice (0, idx), 
            newItem,
            ...arr.slice (idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState (({todoData}) => {  
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState (({todoData}) => {  
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    search(items, term) {
        if(term.length === 0) {
            return items;
        };

        return (items.filter((item) => {
            return item.label.toLowerCase().includes(term.toLowerCase()) === true;
        }));
    }

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return (items.filter( (item) => {
                    return item.done === false;
                }));
            case 'done':
                return (items.filter( (item) => {
                    return item.done === true;
                }));
            default:
                return 'all';
        }
    }

    /*onSearchChange = (term) => {
        this.setState ( {term} );
    }*/

    onSearchChange = (e) => {
        const term = e.target.value;
        this.props.setTermAction(term);
    }

    onFilterChange = (filter) => {
        this.setState ( {filter} );
    }

    render() {
        const { filter } = this.state;
        const { term,todoData } = this.props.page;
        const visibleItems = this.filter( this.search(todoData, this.props.page.term), filter);
        //const doneCount = todoData.filter((el) => el.done).length;
        //const todoCount = todoData.length - doneCount;

        /*return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <Search onSearchChange = { this.onSearchChange }/>
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList 
                    todo={ visibleItems }
                    onDeleted={ this.deleteItem } 
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant= { this.onToggleImportant }
                />

                <ItemAddForm
                    onCreate={ this.createItem }/>
            </div>
        );*/

        return (
            <div className="todo-app">
                <AppHeader />
                <div className="top-panel d-flex">
                <input type="text"
                    className="form-control search-input"
                    placeholder="поиск"
                    value={term}
                    onChange={this.onSearchChange}/>
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList 
                    todo={ visibleItems }
                    deleteItemAction={ this.props.deleteItemAction } 
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant= { this.onToggleImportant }
                />

                <ItemAddForm
                    onCreate={ this.createItem }/>
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);
    return {
        user: store.user,
        page: store.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTodoAction: todo => dispatch(setTodo(todo)),
        setTermAction: term => dispatch(setTerm(term)),
        setFilterAction: filt => dispatch(setFilter(filt)),
        deleteItemAction: id => dispatch(deleteItem(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
