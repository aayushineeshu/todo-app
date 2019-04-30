import React from 'react';
import TodoListItem from './TodoListItem';
import '../App.css';

const TodoList = (props) => {
    var items = props.items.map((item, index) => {
      return (
        <TodoListItem item={item} index={index} removeItem={props.removeItem} markTodoDone={props.markTodoDone} />
      );
    });
    return (
      <ul className="list-group"> {items} </ul>
    );
}

export default TodoList;