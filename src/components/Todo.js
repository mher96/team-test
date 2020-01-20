import React from "react";

import {connect} from "react-redux";
import {toggleTodo} from "../redux/actions";

function Todo({todo, toggleTodo}) {
    const complated = <i className="comp large material-icons">expand_more</i>;
    const incomplated = <i className="incomp large material-icons">rotate_left</i>;
    // console.log('from Todo COMPONENT',todo)
    return (
        <li onClick={() => toggleTodo(todo.id)}  className="list-group-item">
            Todo-{todo.id}: {todo.text} <span>{todo.complete ? complated : incomplated}</span>
        </li>
    )

}


const mapDispatchToProps = {
    toggleTodo
};

export default connect(null, mapDispatchToProps)(Todo);