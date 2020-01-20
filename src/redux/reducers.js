import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from './actionTypes';
import {combineReducers} from "redux";

import FILTERS from '../helpers/consts';


function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.index){
                    return {...todo,
                            complete: !todo.complete
                            };
                }
                else return todo
        });
        default:
            // console.log('from todo[defualt] reducer');
            return state;
    }
}

function toggleFilter(state = FILTERS.ALL, action) {
    switch (action.type) {
        case SET_FILTER:
            // console.log('from toggleFilter[setFilter] reducer ',state);
            return  action.filter;
        default:
            return state;
    }
}

// export default todos;
//
export default combineReducers({todos, toggleFilter});