import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import bookPhoto from './authorized_user_components/book_components/BookPhoto'


const HomePage = () => {

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    return(
        <div>
            <div>
                <br />
                <div className="h1">
                    Simply Books
                </div>
                <br /> <br /> <br /> <br /> <br />
                <div>
                    <p>Book Enthusiasts! Welcome your very own, highly personalized library app!</p>
                    <p>Click on the link below to view our recommendation of some entertaining books,</p>
                    <p>as well as upload your own personal library!</p>
                </div>
                <br /><br />
                <div className="cardPosition">
                    <Card style={layout.card} color='olive'>
                        <Image src={bookPhoto[Math.floor(Math.random()*bookPhoto.length)]} width="300" height="200" />
                            <Card.Content>
                                <Link to={"/login"}>Login</Link>
                        </Card.Content>
                    </Card>  
                </div>
                            
                     
              
            </div>
        </div>
    )

   

}

export default HomePage