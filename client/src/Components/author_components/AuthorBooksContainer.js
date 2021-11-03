import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import AuthorBooksInfo from './AuthorBooksInfo'
import NavBar from '../NavBar'



function AuthorBooksContainer() {

    const [data, setData] = useState([])
   
    useEffect(() => {
        fetch(``)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])


    const booksDisplay = () => data.map((d) => <AuthorBooksInfo key={d.id} data={d} />)

    
    return(
        <div>
            <NavBar />
            <br /><br /><br />
                <div className="h1">Author's Writing Collection</div> 
                <br /><br /><br /><br />
                <div>
                <Card.Group itemsPerRow={3}>
                    {data.length > 0 && booksDisplay()}
                </Card.Group>
                </div>
                <br />
                <div className="buttonPosition">
                    <Button a href="/authors" >Back</Button>
                </div>
        </div>
    )
    
   
}

export default AuthorBooksContainer;