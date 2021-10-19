import React, { useState, useEffect } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import authorPhoto from '../author_components/AuthorPhoto'
import NavBar from '../NavBar'



function Author(props) {

    const [author, setAuthor] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:3000/authors/${props.match.params.id}`)
        .then((response) => response.json())
        .then((data) => setAuthor(data))
    }, [props.match.params.id])

    function displayInfo() {
        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }
    
        
        const {name, birth_city, birth_state, birth_date, college, degree} = author
       
    
        return(
            <Card style={layout.card} color='olive'>
            <Image src={authorPhoto[Math.floor(Math.random()*authorPhoto.length)]} width="300" height="200"/> 
              <Card.Content >
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
                  <Button a href="http://localhost:4000/books">Back</Button>   
                </Card.Content>
          </Card>
      )
    }
    
    return(
        <div>
            <NavBar />
            <h1>Author's Corner</h1>
            { displayInfo() }
        </div>
    )
    
   
}

export default Author;