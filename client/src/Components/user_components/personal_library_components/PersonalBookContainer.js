import React, { useState, useEffect } from 'react'
import PersonalBookInfo from './PersonalBookInfo'
import { Card, Button } from 'semantic-ui-react'
import BookSearch from '../../home_components/BookSearch'


function PersonalBookContainer(){

    const [userBooks, setUserBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    
    
    useEffect(() => {
        fetch('http://localhost:3000/user_books')
        .then((response) => response.json())
        .then((data) => setUserBooks(data))
    }, [])


    const searchBooks = (event) => {
        setSearchInput(event.target.value)
       if (event.target.value !== ''){
        const filteredData = userBooks.filter(book => book.book.genre.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredBooks(filteredData)
       }
       else {
        setFilteredBooks(userBooks)
       }
    }
    
    
    const bookDisplay = () =>  userBooks.map((book) => <PersonalBookInfo key={book.id} book={book} deleteBook={deleteBook} />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <PersonalBookInfo key={book.id} book={book} deleteBook={deleteBook} />)

    
    const deleteBook = (id) => {
        console.log(id)
        const newBooks = userBooks.filter(b => b.id !== id)
       setUserBooks(newBooks)
    }
  
   
    return(
       <div>
            <h1>Your Personal Library</h1> 
            <br />
            <BookSearch searchBooks={searchBooks} />
            <br />
            <Card.Group itemsPerRow={4}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
            <br />
            <Button a href="http://localhost:4000/books">Back</Button>
       </div>
   )
    

}

export default PersonalBookContainer;