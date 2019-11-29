import React from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import AppHeader from '../AppHeader'
import Search from '../Search'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import ItemAddForm from '../ItemAddForm'

import {
    getTodo,
    setTodo
} from '../../actions/PageActions'

import {
    setFilter,
    setTerm
} from '../../actions/FilterActions'

import './Page.css'

export class Page extends React.Component {
    search (items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.toLowerCase().includes(term.toLowerCase()) === true
        })
    }

    filter (items, filter) {
        switch (filter) {
        case 'all':
            return items
        case 'active':
            return items.filter(item => {
                return item.done === false
            })
        case 'done':
            return items.filter(item => {
                return item.done === true
            })
        default:
            return 'all'
        }
    }

    componentDidMount () {
        if (this.props.user.name !== 'anonim') {
            this.props.getTodoAction(this.props.user.name)
        }
    }

    render () {
        if (this.props.user.name === 'anonim') {
            return (
                <div className="wrapper">
                    <h1 className="wrapper__h1">Необходимо авторизоваться</h1>
                </div>
            )
        }

        const { todoData } = this.props.page
        const { filter, term } = this.props.filter
        const visibleItems = this.filter(this.search(todoData, term), filter)
        const doneCount = todoData.filter(el => el.done).length
        const todoCount = todoData.length - doneCount

        return (
            <div className="wrapper">
                <div className="todo-app">
                    <AppHeader toDo={todoCount} done={doneCount} />
                    <div className="top-panel d-flex">
                        <Search onSearchChange={this.props.setTermAction} />
                        <ItemStatusFilter
                            filter={filter}
                            onFilterChange={this.props.setFilterAction}
                        />
                    </div>
                    <TodoList
                        todo={visibleItems}
                    />
                    <ItemAddForm prop={this.props} onCreate={this.props.setTodoAction} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
        filter: store.filter
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getTodoAction: getTodo,
    setFilterAction: setFilter,
    setTermAction: setTerm,
    setTodoAction: setTodo
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)
