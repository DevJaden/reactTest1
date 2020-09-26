import React from 'react';
import {Route} from 'react-router-dom';
import Main from './Main';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <>
      <Route path="/" component={Main} exact />
      <Route path="/todolist" component={TodoList} />
    </>
  );
}

export default App;
