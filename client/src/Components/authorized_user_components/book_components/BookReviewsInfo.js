import React from 'react'
import { Card } from 'semantic-ui-react'

function BookReviewsInfo(props) {

    const layout = {
        card : {
            opacity: "0.8",
            borderRadius: "40px",
            padding: "10px",
            margin: "10px"
        }
    }

    const { review } = props.data

    return(
        <div>
         <Card style={layout.card} color='olive'>
            <Card.Content >
                {review}
            </Card.Content>
        </Card>
      </div>
    )


}
export default BookReviewsInfo;