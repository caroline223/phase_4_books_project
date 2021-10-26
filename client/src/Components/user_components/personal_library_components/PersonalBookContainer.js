import React, { useState, useEffect } from 'react'
import PersonalBookInfo from './PersonalBookInfo'
import { Card } from 'semantic-ui-react'
import BookSearch from '../../home_components/BookSearch'
import { Link } from 'react-router-dom'



function PersonalBookContainer(){

    const [personalBooks, setPersonalBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    
    
    useEffect(() => {
        fetch('http://localhost:3000/personal_books')
        .then((response) => response.json())
        .then((data) => setPersonalBooks(data))
    }, [])


    const searchBooks = (event) => {
        setSearchInput(event.target.value)
       if (event.target.value !== ''){
        const filteredData = personalBooks.filter(book => book.genre.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredBooks(filteredData)
       }
       else {
        setFilteredBooks(personalBooks)
       }
    }
    
    
    const bookDisplay = () =>  personalBooks.map((book) => <PersonalBookInfo key={book.id} book={book} deleteBook={deleteBook} />)
    const filteredBookDisplay = () => filteredBooks.map((book) => <PersonalBookInfo key={book.id} book={book} deleteBook={deleteBook} />)

    
    const deleteBook = (id) => {
        console.log(id)
        const newBooks = personalBooks.filter(b => b.id !== id)

       setPersonalBooks(newBooks)
    }
  
   
    return(
       <div>
            <h1>Your Personal Library</h1> 
            <Link to="/pbform">Add a Book !</Link>
            <br />
            <BookSearch searchBooks={searchBooks} />
            <br />
            <Card.Group itemsPerRow={4}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
       </div>
   )
    

}

export default PersonalBookContainer;