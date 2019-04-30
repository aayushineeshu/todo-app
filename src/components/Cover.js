import React,{useState} from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';


const TodoQuery = gql`
  query{
    todoes{
      id
      description
      completed
    }
  }
`

export const TodoHeader = () => {
      return <h1>Todo list</h1>
  }

export const Landing = () => {

    const [complete,setComplete] = useState(false)

    const completed = () => {
       setComplete(true) 
    }

    return (
        <Query query={TodoQuery} >
        { ({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
             
          const linksToRender = data.todoes
          console.log("linksToRender",linksToRender)
          return(
            <div>
        <TodoHeader />
        <a href="/new" ><h4><b>＋</b> Create a new note</h4></a>
         { linksToRender.map((todo, id) => (
             <span>
            <input type="checkbox" onClick={completed} complete={complete} ></input>
            {console.log("complete",complete)}
            <p>{todo.description}</p>
            </span>
         )) }
         </div>
          )
        }}
        </Query>
    )
}
