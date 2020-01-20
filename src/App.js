import React from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoList from "./components/TodoList";
import Filter from './components/Filtre'

import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {
  return (
    <Provider store={store} className="App">
        <div  className="form-group">
            <div className="rew">
                <div className="col-sm-4 col-offset-1">
                    <h1>Todo App</h1>
                    <AddTodo/>
                    <Filter/>
                    <TodoList/>
                </div>
            </div>
        </div>
    </Provider>
  );
}

export default App;
