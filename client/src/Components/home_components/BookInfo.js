import React, { useState } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import bookPhoto from './BookPhoto'



function BookInfo(props){

  const [addNewBook, setAddNewBook] = useState(false)

  const handleClick = () => {
    setAddNewBook((addNewBook) => !addNewBook)
  }


    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

   
    const { id, title, genre, publishing_date, author, rating } = props.book

    return(
        <Card style={layout.card} color='olive'>
        <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/> 
          <Card.Content>
              <header>
              {title} 
              </header>
              <Card.Description>
                  <br />
                  {genre}
                  <div>
                    <Link to={`authors/${author.id}`}> Author's Name: {author.name} </Link>   
                  </div>
                 <div>
                    Date Published: {publishing_date}
                 </div>
                  <div>
                    Rating: {rating}/10
                  </div>
                  <div>
                    <Link to={`books/${id}`}>Reviews</Link>
                  </div>
                  <br />
                    <Button onClick={props.addBook}  id={props.book.id}>{addNewBook ? "Book Added" : "Add Book to Library"}</Button>  
              </Card.Description> 
            </Card.Content>
      </Card>
    )


}

export default BookInfo;