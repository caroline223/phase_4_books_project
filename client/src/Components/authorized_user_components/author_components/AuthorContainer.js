import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import AuthorInfo from './AuthorInfo'
import NavBar from '../../NavBar'

function AuthorContainer({setUser}){

    const [authors, setAuthors] = useState([])
    

    useEffect(() => {
        fetch('/authors')
        .then((response) => response.json())
        .then((data) => setAuthors(data))
    }, [])

    
    const authorDisplay = authors.map((author) => <AuthorInfo key={author.id} authors={author} />)

   return(
       <div>
           <br /><br /><br /><br />
           <NavBar setUser={setUser} />
          <div className="h1">Featured Authors</div> 
          <br /><br /><br />
         <Card.Group itemsPerRow={5}>
             {authorDisplay}
         </Card.Group>
       </div>
   )
    



}

export default AuthorContainer;