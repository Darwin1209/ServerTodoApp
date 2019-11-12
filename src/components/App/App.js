import React from 'react';
//import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { connect } from 'react-redux';
import { setTodo, setFilter, setTerm, deleteItem, doneItem, importantItem } from '../../actions/PageActions'

import AppHeader from '../AppHeader';
import Search from '../Search';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';  
import ItemAddForm from '../ItemAddForm';

import './App.css'

class App extends React.Component {

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

    render() {
        const { todoData, filter, term } = this.props.page;
        const visibleItems = this.filter( this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <Header />
                <Page />
                <Footer />
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <Search onSearchChange = { this.props.setTermAction }/>
                    <ItemStatusFilter 
                        filter={filter}
                        onFilterChange={this.props.setFilterAction}
                    />
                </div>
                <TodoList 
                    todo={ visibleItems }
                    deleteItemAction={ this.props.deleteItemAction } 
                    onToggleDone={ this.props.doneItemAction }
                    onToggleImportant= { this.props.importantItemAction }
                />

                <ItemAddForm
                    onCreate={ this.props.setTodoAction }/>
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
        deleteItemAction: id => dispatch(deleteItem(id)),
        doneItemAction: id => dispatch(doneItem(id)),
        importantItemAction: id => dispatch(importantItem(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
