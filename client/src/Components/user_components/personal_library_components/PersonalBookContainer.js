import React, { useState, useEffect } from 'react'
import PersonalBookInfo from './PersonalBookInfo'
import { Card } from 'semantic-ui-react'
import BookSearch from '../../home_components/BookSearch'
import { Link } from 'react-router-dom'



function PersonalBookContainer(){

    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    
    
    useEffect(() => {
        fetch('http://localhost:3000/personal_books')
        .then((response) => response.json())
        .then((data) => setBooks(data))
    }, [])


    const searchBooks = (event) => {
        setSearchInput(event.target.value)
       if (searchInput !== ''){
        const filteredData = books.filter(book => book.genre.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredBooks(filteredData)
       }
       else {
        setFilteredBooks(books)
       }
    }
    
    
    const bookDisplay = () =>  books.map((book) => <PersonalBookInfo key={book.id} book={book} />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <PersonalBookInfo key={book.id} book={book} />)

   return(
       <div>
            <h1>Your Personal Library</h1> 
            <Link to="/pbform">Add a Book !</Link>
            <br />
            <BookSearch searchBooks={searchBooks} />
            <br />
            <Card.Group itemsPerRow={5}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
       </div>
   )
    



}

export default PersonalBookContainer;