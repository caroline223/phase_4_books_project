import React, { useState, useEffect } from 'react'
import BookInfo from './BookInfo'
import { Card } from "semantic-ui-react"
import NavBar from '../../NavBar'
import BookSearch from './BookSearch'


function BookContainer({setUser}){

    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')
    
    
    
    useEffect(() => {
        fetch('/books')
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

    
   
    const bookDisplay = () =>  books.map((book) => <BookInfo key={book.id} book={book}  addBook={addBook}   />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <BookInfo key={book.id} book={book}  addBook={addBook}  />)



    const addBook = (event) => {
        const id = parseInt(event.target.id)
        fetch(`/books/${id}/user_books`, {
            method: "POST",
        })
        .then((response) => response.json())
        .then(data => console.log(data));
    }
   return(
       <div>
            <NavBar setUser={setUser} />
            <br /><br /><br /><br />
            <div className="h1">Featured Books</div> 
            <br /><br />
            <BookSearch searchBooks={searchBooks}  />
            <br /><br />
            <Card.Group itemsPerRow={5}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
       </div>
   )
    



}

export default BookContainer;