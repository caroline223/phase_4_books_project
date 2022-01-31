import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'
import AuthorInfo from './AuthorInfo'
import AuthorSearch from './AuthorSearch'
import NavBar from '../../NavBar'

function AuthorContainer({setUser}){

    const [authors, setAuthors] = useState([])
    const [filteredAuthors, setFilteredAuthors] = useState([])
    const [searchInput, setSearchInput] = useState('')
    

    useEffect(() => {
        fetch('/authors')
        .then((response) => response.json())
        .then((data) => setAuthors(data))
    }, [])

    const searchAuthors = (event) => {
        setSearchInput(event.target.value)
       if (event.target.value !== ''){
        const filteredData = authors.filter(author => author.name.toLowerCase().includes(searchInput.toLowerCase()))
        setFilteredAuthors(filteredData)
       }
       else {
        setFilteredAuthors(authors)
       }
    }
    
    const authorDisplay = () => authors.map((author) => <AuthorInfo key={author.id} authors={author} />)
    const filteredAuthorDisplay = () => filteredAuthors.map((author) => <AuthorInfo  key={author.id} authors={author}/>)

   return(
       <div className='infoPage'>
           <br /><br /><br /><br />
           <NavBar setUser={setUser} />
          <div className="h1">Featured Authors</div> 
          <br /><br />
          <AuthorSearch searchAuthors={searchAuthors} />
          <br /><br /><br />
         <Card.Group itemsPerRow={5}>
            {filteredAuthors.length > 0 ? filteredAuthorDisplay(): authorDisplay()}
         </Card.Group>
       </div>
   )
    



}

export default AuthorContainer;