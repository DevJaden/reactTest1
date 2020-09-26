import React from 'react';
import {Route} from 'react-router-dom';
import UserList from './API/UserList';
import Main from './Main';
import TodoList from './TodoList/TodoList';

function App() {
  return (
    <>
      <Route path="/" component={Main} exact />
      <Route path="/todolist" component={TodoList} />
      <Route path="/api" component={UserList} />
    </>
  );
}

export default App;
