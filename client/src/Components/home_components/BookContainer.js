import React, { useState, useEffect } from 'react'
import BookInfo from './BookInfo'
import { Card } from "semantic-ui-react"
import NavBar from '../NavBar'


function BookContainer(){

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/books')
        .then((response) => response.json())
        .then((data) => setBooks(data))
    }, [])

    
    const bookDisplay = books.map((book) => <BookInfo key={book.id} books={book} />)

   return(
       <div>
           <NavBar />
           <br />
          <h1>Featured Books</h1> 
          <br />
         <Card.Group itemsPerRow={5}>
             {bookDisplay}
         </Card.Group>
       </div>
   )
    



}

export default BookContainer;