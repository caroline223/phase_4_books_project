import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import bookPhoto from '../../home_components/BookPhoto'


function PersonalBookInfo(props){

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    const { title, genre, publishing_date, author, rating, review } = props.book

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
                    {author}  
                  </div>
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
                  
              </Card.Description>    
            </Card.Content>
      </Card>
    )


}

export default PersonalBookInfo;