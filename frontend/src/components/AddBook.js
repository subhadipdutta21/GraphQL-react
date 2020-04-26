import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks';
import {getBooksQuery} from './BookList'

const getAuthorsQuery = gql`
    {
        authors{
            name,
            id
        }
    }
`

const addBookMutation = gql`
    mutation($name:String!, $genre:String!, $authorId: ID! ){
        addBook(name:$name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`

const AddBook = () => {
    const [name, setName] = React.useState('')
    const [genre, setGenre] = React.useState('')
    const [selectedAuthor, setSelectedAuthor] = React.useState(null)
    const { loading, error, data } = useQuery(getAuthorsQuery)
    const [addBook] = useMutation(addBookMutation);

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(name, genre, selectedAuthor)
        addBook({
            variables: {
                name, genre, authorId: selectedAuthor
            },refetchQueries:[{query : getBooksQuery}]
        })
    }

    return (
        <>
            <div style={{ width: '40%' }}>
                <h3>Add Books :</h3>                                
                <input className="form-control" type="text" placeholder="Book name" onChange={e => setName(e.target.value)} />
                <br />
                <input className="form-control" type="text" placeholder="Genre" onChange={e => setGenre(e.target.value)} />
                <br />
                <div className="form-group">
                    <select className="form-control" id="exampleFormControlSelect1" onChange={e => setSelectedAuthor(data.authors.filter(d => d.name === e.target.value)[0].id)}>
                        <option>Select Author</option>
                        {data?.authors.map((author, index) => (
                            <option key={index}>{author.name}</option>
                        ))}
                    </select>
                </div>
                <button onClick={(e) => onSubmit(e)}>add</button>               
            </div>
        </>
    );
}

export default AddBook;