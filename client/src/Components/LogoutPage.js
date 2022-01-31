import React from 'react'
import { Button } from 'semantic-ui-react'



const LogoutPage = () => {


    return(
        <div className='miscellaneousPages'>
            <div>
                <br /><br /><br /><br />
                <div>
                    <p>Thanks for stopping by!</p>
                    <p>You have successfully logged out.</p>
                    <p>Please click below to return to the home page.</p>
                </div>
                <br /><br /><br /><br /><br /><br />
                <div style={{textAlign: 'center'}}>
                    <Button size='massive' style={{fontFamily: 'optima'}} href="/">Home</Button>
                </div>
                            
                     
              
            </div>
        </div>
    )

   

}

export default LogoutPage