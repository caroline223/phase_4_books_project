import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import bookPhoto from './BookPhoto'


function BookInfo(props){

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    const removeBook = (event) => {
      const id = parseInt(event.target.id)
     if(window.confirm("Are you sure?"))
     fetch(`http://localhost:3000/books/${id}`, {
         method: 'DELETE'
     })
    .then(() => { props.deleteBook(id) })
   }

  

   
    const { id, title, genre, publishing_date, author, rating, read } = props.book

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
                  <div>Seems Interesting?
                    <br />
                    <Button onClick={props.readBook} id={props.book.id}>{read ? "Yes" : "No"}</Button>
                    
                    </div>  
              </Card.Description> 
             
              <br /> 
              <Button onClick={removeBook} id={props.book.id}>Remove</Button>
            </Card.Content>
      </Card>
    )


}

export default BookInfo;