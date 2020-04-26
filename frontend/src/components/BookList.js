import React from 'react';
import { gql } from 'apollo-boost'
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import BookDetails from './BookDetails';

export const getBooksQuery = gql`
    {
        books {
            name,
            genre,
            id
        }
    }
` 
const getBookDetailsQuery = gql`
    query($id:ID){
        book(id:$id) {
            name,
            genre,
            author {
                name,
                age
            }
        }
    }
`

const BookList = () => {
    const [getBookDetails, { loading, data }] = useLazyQuery(getBookDetailsQuery);
    const booksQueryResult = useQuery(getBooksQuery);
    if (booksQueryResult.loading) return <p>Loading...</p>;
    if (booksQueryResult.error) return <p>Error </p>;

    return (
        <>
            {console.log(booksQueryResult.data, data)}
            <ul>
                {booksQueryResult?.data?.books.map((dataitem, index) => (
                    <li style={{ cursor: 'pointer' }} key={index} onClick={() => getBookDetails({ variables: { id: dataitem.id } })}>
                        {dataitem.name}
                    </li>
                ))}
            </ul>
            <hr />
            {data && <BookDetails data={data.book} />}
        </>
    );
}

export default BookList