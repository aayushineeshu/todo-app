import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Landing } from './components/Cover';
import TodoRoutes from './TodoRoutes';


var todoItems = [];
  // todoItems.push({index: 1, value: "learn react", done: false});
  // todoItems.push({index: 2, value: "Go shopping", done: false});
  // todoItems.push({index: 3, value: "buy flowers", done: true});


  class TodoApp extends React.Component {
    state = {
      todoItems: todoItems,
      done: false,
    }
    addItem = (todoItem) => {
      todoItems.unshift({
        index: todoItems.length+1, 
        value: todoItem.newItemValue, 
        done: false
      });
      this.setState({todoItems: todoItems});
    }
    removeItem = (itemIndex) => {
      todoItems.splice(itemIndex, 1);
      this.setState({todoItems: todoItems});
    }
    markTodoDone = (itemIndex) => {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({
        todoItems: todoItems,
      });  
    }
    
    render() {
      console.log("data")
      return (
        <div id="main">
          <Landing />
          <TodoForm  saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }} /> 
         <TodoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        </div>
      );
    }
  }

  export default TodoApp;

  // ReactDOM.render(<TodoApp initItems={todoItems} /> 
  //     , document.getElementById('root'));