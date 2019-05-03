import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const CreateMutation = gql`
  mutation($description: String!, $completed: Boolean!) {
    createTodo(description: $description, completed: $completed ) {
      id
      description
    }
  }
`;

class TodoForm extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = async (e, createTodo) => {
    e.preventDefault();
    try {
      await createTodo({
        variables: { description: this.state.value, completed: false }
      });
      this.props.history.push('/');
    } catch (err) {
      console.log('oops error', err);
    }
  };

  render() {
    return (
      <Mutation mutation={CreateMutation}>
        {createTodo => (
          <div>
            <form onSubmit={e => this.handleSubmit(e, createTodo)}>
              <input
                type="text"
                name="todo"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="add a new todo..."
              />
              <button type="submit">Add</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default TodoForm;
