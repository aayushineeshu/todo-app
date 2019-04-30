import React from 'react';

export const TodoHeader = () => {
      return <h1>Todo list</h1>
  }

export const Landing = () => {
    console.log("hi")
    return (
        <div className="list-group" >
        <TodoHeader />
        <a href="/new" class="list-group-item"><h4><b>＋</b> Create a new note</h4></a>
        </div>
    )
}
