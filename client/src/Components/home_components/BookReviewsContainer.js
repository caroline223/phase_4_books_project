import React, { useState, useEffect } from 'react'
import BookReviewsInfo from './BookReviewsInfo'
import NavBar from '../NavBar'
import { Card, Button } from 'semantic-ui-react'


function BookReviewsContainer({ match }) {

    const [data, setData] = useState([])
    
    useEffect(() => {

        fetch(`http://localhost:3000/books/${match.params.id}`)
        .then((response) => response.json())
        .then((data) => setData(data.book_reviews))

    }, [match.params.id])

    const reviewsDisplay = () => data.map((d) => <BookReviewsInfo key={d.id} data={d} />)

   return(
       <div>
           <NavBar />
          <h1>Reviews</h1> 
          <br />
         <Card.Group>
             {data.length > 0 && reviewsDisplay()}
         </Card.Group>
         <div>
             <Button a href="http://localhost:4000/books">Back</Button>
         </div>
       </div>
   )


}

export default BookReviewsContainer;