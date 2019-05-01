import React from 'react';
import TodoList from './TodoList';
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

const CreateMutation = gql`
  mutation($description: String!, $status: boolean!){
    createtodo(data: {description: $string, completed: $boolean}) {
      id
      description
    }
  }
`

class TodoForm extends React.Component {

  state= {
    value: ''
  }

  componentDidMount() {
    //this.refs.itemName.focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render () {
    return (
        <Query query={TodoQuery}>
        { ({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const linksToRender = data.todoes
          console.log("linksToRender",linksToRender)
          return(
          <div>
         <form onSubmit={this.handleSubmit}>
         <input type="text" name="todo" value={this.state.value} onChange={this.handleChange}
            placeholder="add a new todo..."/>
         <button type="submit">Add</button> 
         {console.log("value",)}
         </form>
         </div>
          )
          }}
        </Query>
    );   
  }
}

export default TodoForm;