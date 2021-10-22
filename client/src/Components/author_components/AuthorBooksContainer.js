import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import AuthorBooksInfo from './AuthorBooksInfo'
import NavBar from '../NavBar'



function AuthorBooksContainer({ match }) {

    const [data, setData] = useState([])
   
    useEffect(() => {
        fetch(`http://localhost:3000/authors/books/${match.params.id}`)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [match.params.id])


    const booksDisplay = () => data.map((d) => <AuthorBooksInfo key={d.id} data={d} />)

    
    return(
        <div>
            <NavBar />
                <h1>Author's Writing Collection</h1> 
                <div>
                <Card.Group >
                    {data.length > 0 && booksDisplay()}
                </Card.Group>
                </div>
                <br />
                <div>
                    <Button a href="http://localhost:4000/authors">Back</Button>
                </div>
        </div>
    )
    
   
}

export default AuthorBooksContainer;