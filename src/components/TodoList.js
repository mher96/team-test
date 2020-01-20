import React, {useState} from 'react';
import Todo from './Todo';
import {getByFilter} from '../helpers/filterHelper';


import {connect} from "react-redux";

function TodoList(props){

    const todoElements = (props.todos.length !== 0)
        ? props.todos.map(todo => <Todo key={todo.id} todo={todo} />)
        : <li>Not Todo</li>

    return (
        <ul className="list-group">
            {todoElements}
        </ul>
    );
}

const mapStateToProps = (state) => {
    console.log("get ByFilter return",getByFilter(state.todos, state.toggleFilter));
    return {
        todos:getByFilter(state.todos, state.toggleFilter)

    };
};

export default connect(mapStateToProps)(TodoList);
