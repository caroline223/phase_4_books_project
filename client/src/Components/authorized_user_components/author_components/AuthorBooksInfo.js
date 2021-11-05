import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import bookPhoto from '../book_components/BookPhoto'


function AuthorBooksInfo(props) {


    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    const { title, genre, publishing_date, rating } = props.data

    return(
        <div>
         <Card style={layout.card} color='olive' >
            <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/> 
            <Card.Content className="description">
              <header>
              {title} 
              </header>
              <Card.Description>
                  Genre: {genre}
                 <div>
                    Date Published: {publishing_date}
                 </div>
                  <div>
                    Rating: {rating}/10
                  </div>
                </Card.Description>
                </Card.Content>
        </Card>
      </div>
    )


}
export default AuthorBooksInfo;