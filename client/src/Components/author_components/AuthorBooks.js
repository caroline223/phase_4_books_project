import React, { useState, useEffect } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import bookPhoto from '../home_components/BookPhoto'
import NavBar from '../NavBar'



function AuthorBooks(props) {

    const [books, setBooks] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:3000/books/${props.match.params.id}`)
        .then((response) => response.json())
        .then((data) => setBooks(data))
    }, [])

    function displayInfo() {
        const layout = {
            card : {
                opacity: "0.8",
                borderRadius: "40px"
            }
        }
    
        
        const {title, genre, publishing_date, rating } = books

        

    return (
        <div>
            <Card style={layout.card} color='olive'>
            <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200"/> 
            <Card.Content >
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
                </Card.Description>    
                </Card.Content>
        </Card>
        <Button a href="http://localhost:4000/authors">Back</Button>
      </div>
        )
    }
    
    
    return(
        <div>
            <NavBar />
            <Card.Group itemsPerRow={3}>
                { displayInfo() }
            </Card.Group>
        </div>
    )
    
   
}

export default AuthorBooks;