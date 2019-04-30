import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import gql from "graphql-tag";
import TodoRoutes from './TodoRoutes';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
    uri: "https://eu1.prisma.sh/aayushi-23b2b3/Todo/dev"
  });
  client
  .query({
    query: gql`
      {
       todoes {
          id
          description
          completed
        }
      }
    `
  })
  .then(result => console.log(result));
ReactDOM.render( 
    <ApolloProvider client={client}>
        <TodoRoutes />
        </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
