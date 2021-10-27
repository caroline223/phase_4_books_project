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

    
    const deleteBook = (id) => {
        console.log(id)
        const newBooks = books.filter(b => b.id !== id)
       setBooks(newBooks)
    }

   
    const bookDisplay = () =>  books.map((book) => <BookInfo key={book.id} book={book} deleteBook={deleteBook} readBook={readBook} />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <BookInfo key={book.id} book={book} deleteBook={deleteBook} readBook={readBook} />)


     const readBook = (event) => {
         console.log(event.target.id)
        const id = parseInt(event.target.id)
        if(window.confirm("Nice Choice."))
        fetch(`http://localhost:3000/books/${id}`, {
            method: "PATCH",
            headers: {
            "Content-type": "application/json"
            },
            body: JSON.stringify(books.read = true)
        })
        .then(response => response.json())
        .then(data => setFilteredBooks(data))
    }

    
   return(
       <div>
            <NavBar />
            <br />
            <h1>Featured Books</h1> 
            <br />
            <BookSearch searchBooks={searchBooks} />
            <br />
            <Card.Group itemsPerRow={4}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
       </div>
   )
    



}

export default BookContainer;