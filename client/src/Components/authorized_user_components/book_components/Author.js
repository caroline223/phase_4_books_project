import React, { useState, useEffect } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import authorPhoto from '../author_components/AuthorPhoto'
import NavBar from '../../NavBar'




function Author() {

    const [author, setAuthor] = useState([])
    
    useEffect(() => {
        fetch(``)
        .then((response) => response.json())
        .then((data) => setAuthor(data))
    }, [])

    function displayInfo() {
        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }
    
        
        const {name, birth_city, birth_state, birth_date, college, degree} = author
       
    
        return(
            <div className="cardPosition">
            <Card style={layout.card} color='olive'>
            <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="300" height="200"/> 
              <Card.Content className="description" >
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
                  </Card.Description> 
                  <br />
                  <Button href="/books">Back</Button>   
                </Card.Content>
          </Card>
          </div>
      )
    }
    
    return(
        <div>
            <NavBar />
            <br /> <br /> <br />
            <div className="h1">Author's Corner</div>
            { displayInfo() }
        </div>
    )
    
   
}

export default Author;