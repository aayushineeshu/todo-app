import React from 'react';
import '../App.css';

const TodoListItem = (props) => {

   const onClickClose = () => {
      var index = parseInt(props.index);
      props.removeItem(index);
    }

    const onClickDone = () => {
      var index = parseInt(props.index);
      props.markTodoDone(index);
    }
    
      var todoClass = props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group">
          <div className={todoClass}>
            <button className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={onClickDone}>&#10004;</button>
            {props.item.value}
            <button type="button" className="close" onClick={onClickClose}>&times;</button>
          </div>
        </li>     
      );
    
  }

  export default TodoListItem;