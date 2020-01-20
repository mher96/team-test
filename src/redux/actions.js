import {ADD_TODO, TOGGLE_TODO, SET_FILTER} from './actionTypes';

let id = 0;

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: ++id,
        text
    }
}
export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}
export function setFilter(filter) {
    return { type: SET_FILTER, filter }
}