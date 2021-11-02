import React, { useState, useEffect } from 'react'
import PersonalBookInfo from './PersonalBookInfo'
import { Card, Button } from 'semantic-ui-react'
import BookSearch from '../../home_components/BookSearch'


function PersonalBookContainer(){

    const [userBooks, setUserBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchInput, setSearchInput] = useState('')

    
    
    useEffect(() => {
        fetch('/user_books')
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
            <br />
            <div className="h1">Your Personal Library</div> 
            <br /><br />
            <BookSearch searchBooks={searchBooks} />
            <br /> <br />
            <Card.Group itemsPerRow={4}>
                {filteredBooks.length > 0 ? filteredBookDisplay(): bookDisplay()}
            </Card.Group>
            <br />
            <div className="buttonPosition">
            <Button a href="http://localhost:4000/books">Back</Button>
            </div>
       </div>
   )
    

}

export default PersonalBookContainer;