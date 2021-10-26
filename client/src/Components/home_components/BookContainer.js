import React, { useState, useEffect } from 'react'
import BookInfo from './BookInfo'
import { Card } from "semantic-ui-react"
import NavBar from '../NavBar'
import BookSearch from './BookSearch'


function BookContainer(){

    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    
    
    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then((response) => response.json())
        .then((data) => setBooks(data))
    }, [])


    const searchBooks = (event) => {
        setSearchInput(event.target.value)
       if (event.target.value !== ''){
        const filteredData = books.filter(book => book.genre.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredBooks(filteredData)
       }
       else {
        setFilteredBooks(books)
       }
    }
    
    
    const bookDisplay = () =>  books.map((book) => <BookInfo key={book.id} book={book} />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <BookInfo key={book.id} book={book} />)

   return(
       <div>
            <NavBar />
            <br />
            <h1>Featured Books</h1> 
            <br />
            <BookSearch searchBooks={searchBooks} />
            <br />
            <Card.Group itemsPerRow={5}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
       </div>
   )
    



}

export default BookContainer;