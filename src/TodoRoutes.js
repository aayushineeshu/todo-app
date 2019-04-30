import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Landing } from './components/Cover';
import TodoForm from './components/TodoForm';


function TodoRouter({addItem}) {
    return (
      <Router>
          <Route path="/" exact component={Landing} />
          <Route path="/new" render={ props => <TodoForm />} />
          {/* <Route path="/reviews/" component={Reviews} />
          <Route path="/about/" component={About} />
          <Route path="/official-trailer/" component={OfficialTrailer} /> */}
      </Router>
    );
  }
  
  export default TodoRouter;