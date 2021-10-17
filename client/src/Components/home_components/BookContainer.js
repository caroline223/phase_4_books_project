import React, { useState, useEffect } from 'react'
import BookInfo from './BookInfo'
import { Card } from "semantic-ui-react"
import BookSearch from './BookSearch'

function BookContainer(){

    const [books, setBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then((response) => response.json())
        .then((data) => setBooks(data))
    }, [])

    const handleSearchInput = (event) => {
        setSearchInput(
            {searchInput: event.target.value}
        )

        if(event.target.value === '' ) {
            setBooks(books)
        } else {
            setBooks(filterSearchByInput(event.target.value))
        }
    }

    const filterSearchByInput = (input) => {
        console.log(input)
        books.filter((book) => book.genre.toLowerCase().includes(input.toLowerCase())) 

    }
    

    const bookDisplay = books.map((book) => <BookInfo key={book.id} books={book} />)

   return(
       <div>
          <h1>Recommended Books</h1> 
          <br />
         <Card.Group itemsPerRow={5}>
             {bookDisplay}
         </Card.Group>
       </div>
   )
    



}

export default BookContainer;