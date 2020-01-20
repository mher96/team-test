import FILTERS from '../helpers/consts';

export function getByFilter(todos, filter) {
    console.log('from helpers  FUNCTION ',filter);
    let result = '';
    switch (filter) {
        case FILTERS.COMPLATED:
            console.log('in complated filter');
            return result = todos.filter(todo => {
                // console.log('todo from helper function',todo);
                return todo.complete == true;
            });
        case FILTERS.INCOMPLETE:
            console.log('in incomplated filter');
            return result = todos.filter(todo => {
                return todo.complete == false;
            });
        case FILTERS.ALL:
        // default:
            console.log('im defualt');
            return result = todos;

    }
    console.log('result from helper function' ,result);
    return result;
}