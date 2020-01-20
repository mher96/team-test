import React, {useState} from 'react';

import {addTodo} from '../redux/actions'
import {connect} from "react-redux";

function AddTodo(props) {
    const [inputValue, setinputValue] = useState('');
    const heandleChange = (event) => {
        setinputValue(event.target.value)
    };
    const heandleClick = () => {
        props.addTodo(inputValue);
        setinputValue('')
    };

    return (
        <>
            {/*{props.todos.length}*/}
            <label htmlFor="usr">Todo:</label>
            <input type="text" className="form-control" onChange={heandleChange} value={inputValue} id="usr" />
            <input value="Add Todo" type="button" onClick={heandleClick}  className="btn btn-success"/>
        </>
          );

}
// const mapStateToProps = (state) => {
//     // const {todos} = state;
//     return {todos: state};
// }
const mapDispatchToProps = {
    addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);
