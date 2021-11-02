import React, { useState, useEffect } from 'react'
import BookReviewsInfo from './BookReviewsInfo'
import NavBar from '../NavBar'
import { Card, Button } from 'semantic-ui-react'


function BookReviewsContainer() {

    const [data, setData] = useState([])
    
    useEffect(() => {

        fetch(``)
        .then((response) => response.json())
        .then((data) => setData(data.book_reviews))

    }, [])

    const reviewsDisplay = () => data.map((d) => <BookReviewsInfo key={d.id} data={d} />)

   return(
       <div>
           <NavBar />
           <br /> <br /> <br />
          <div className="h1">Reviews</div> 
          <br /> <br /> <br />
         <Card.Group>
             {data.length > 0 && reviewsDisplay()}
         </Card.Group>
         <div className="buttonPosition">
             <Button a href="http://localhost:4000/books">Back</Button>
         </div>
       </div>
   )


}

export default BookReviewsContainer;