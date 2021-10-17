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

    const {title, genre, publishing_date, rating, author_id} = props.books

    return(
        <Card style={layout.card} color='olive'>
        <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/> 
          <Card.Content className="bookDescription">
              <header>
              {title} 
              </header>
              <Card.Description>
                  <br />
                  {genre}
                  <div>
                    <Link to={`author/${author_id}`}>Author's Name: </Link>   
                  </div>
                 <div>
                    Date Published: {publishing_date}
                 </div>
                  <div>
                    Rating: {rating}/10
                  </div>
                  <br />
                  
              </Card.Description>    
            </Card.Content>
            <Card.Content>
                  <div >
                    <Button>Not Interested</Button>
                  </div>  
            </Card.Content>
      </Card>
    )


}

export default BookInfo;