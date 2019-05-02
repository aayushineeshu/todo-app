import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';

const TodoQuery = gql`
  query {
    todoes {
      id
      description
      completed
    }
  }
`;

const DeleteTodo = gql`
  mutation($id: ID!) {
    deletetodo(where: { id: $id }) {
      id
    }
  }
`;

const UpdateTodo = gql`
  mutation($id: ID!, $completed: Boolean!) {
    updatetodo(where: { id: $id }, data: { completed: $completed }) {
      id
    }
  }
`;

export const TodoHeader = () => {
  return <h1>Todo list</h1>;
};

export const Landing = () => {
  const handleDelete = async (deletetodo, id) => {
    await deletetodo({
      variables: { id },
      refetchQueries: [{ query: TodoQuery }]
    });
  };

  const handleDone = async (updatetodo, id) => {
    await updatetodo({
      variables: { id, completed: true },
      refetchQueries: [{ query: TodoQuery }]
    });
  };

  return (
    <Mutation mutation={UpdateTodo}>
      {updatetodo => (
        <Mutation mutation={DeleteTodo}>
          {deletetodo => (
            <Query query={TodoQuery} fetchPolicy={'network-only'}>
              {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>;
                if (error) return <div>Error</div>;

                return (
                  <div style={{ margin: '32px' }}>
                    <TodoHeader />
                    <Link to="/new">
                      <h4>
                        <b>＋</b> Create a new note
                      </h4>
                    </Link>
                    {data.todoes.map((todo, id) => {
                      return (
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr'
                          }}
                        >
                          <span
                            style={{
                              textDecoration: todo.completed
                                ? 'line-through'
                                : ''
                            }}
                          >
                            {todo.description}
                          </span>
                          <button
                            style={{ width: '100px' }}
                            onClick={e => handleDone(updatetodo, todo.id)}
                          >
                            Done
                          </button>
                          <button
                            style={{ width: '100px' }}
                            onClick={e => handleDelete(deletetodo, todo.id)}
                          >
                            Delete
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              }}
            </Query>
          )}
        </Mutation>
      )}
    </Mutation>
  );
};
