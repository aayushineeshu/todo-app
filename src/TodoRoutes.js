import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Landing } from './components/Home';
import TodoForm from './components/TodoForm';


function TodoRouter() {
    return (
      <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/new" render={ props => <TodoForm {...props}/>} />
      </Router>
    );
  }
  
  export default TodoRouter;