import React, { useState } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from '../../home_components/BookPhoto'


function PersonalBookInfo(props){

  const [book, setBook] = useState(props.book)

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "20px"
        }
    }

    const removeBook = (event) => {
      const id = parseInt(event.target.id)
     if(window.confirm("Are you sure?"))
     fetch(`/user_books/${id}`, {
         method: 'DELETE'
     })
    .then(() => { props.deleteBook(id) })
   }


    const readBook = (event) => {
      const id = parseInt(event.target.id)
      fetch(`/user_books/${id}`, {
          method: 'PATCH',
          headers: {
          "Content-type": "application/json"
          },
          body: JSON.stringify({read: true})
      })
      .then((response) => response.json())
      .then((book) => setBook(book))
  }

  const recommendBook = (event) => {
    const id = parseInt(event.target.id)
    fetch(`/user_books/${id}`, {
        method: 'PATCH',
        headers: {
        "Content-type": "application/json"
        },
        body: JSON.stringify({consider: true})
    })
    .then(response => response.json())
    .then(book => setBook(book))
}

    const { title, genre, publishing_date, rating, review } = props.book.book
   
    return(
        <Card style={layout.card} color='olive'>
        <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="350" height="175"/> 
          <Card.Content className="description">
              <header>
              {title} 
              </header>
              <Card.Description>
                  <br />
                  {genre}
                 <div>
                    Date Published: {publishing_date}
                 </div>
                  <div>
                    Rating: {rating}/10
                  </div>
                  <div>
                    {review}
                  </div>
                  <br />  
                  <div>Did you read this book?
                  <br />
                    <Button onClick={readBook} id={props.book.id}>{book.read ? "Yes" : "No"}</Button>
                  </div> 
                  <div>Would you recommend this book?
                  <br />
                    <Button onClick={recommendBook} id={props.book.id}>{book.consider ? "Yes" : "No"}</Button>
                  </div>   
              </Card.Description>  
              <br />  
              <Button onClick={removeBook} id={props.book.id}>Remove</Button>
            </Card.Content>
      </Card>
    )
}

export default PersonalBookInfo;