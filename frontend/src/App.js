import React from 'react';
import BookList from './components/BookList';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import AddBook from './components/AddBook';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container' style={{ padding: '20px' }}>
        <header>
          <h3>Reading List :</h3>
          <BookList />
          <hr/>
          <AddBook />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
