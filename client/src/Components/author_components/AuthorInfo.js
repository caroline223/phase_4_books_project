import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import authorPhoto from './AuthorPhoto'

function AuthorInfo(props) {

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    const {name, birth_city, birth_state, birth_date, college, degree} = props.authors

    return(
        <Card style={layout.card} color='olive'>
        <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="300" height="200"/> 
          <Card.Content className="bookDescription">
              <header>
              {name} 
              </header>
              <Card.Description>
                  <br />
                  Hometown: {birth_city}, {birth_state} 
                 <div>
                    Birthday: {birth_date}
                 </div>
                  <div>
                    College Attended: {college}
                  </div>
                  <div>
                    Degree Earned: {degree}
                  </div>
                  <br />
                  
              </Card.Description>    
            </Card.Content>
      </Card>
    )


}

export default AuthorInfo