import React from 'react'
import { Button } from 'semantic-ui-react'


function AccountDeletionSuccess(){

  
    return(
        <div className='miscellaneousPages'>
                <br /><br /><br /><br />
                    <p>Your account has been successfully deleted.</p>
                    <p>Please click below to return to the home page.</p>
                <br /><br />

                <div style={{textAlign: 'center'}}>
                    <Button size='massive' style={{fontFamily: 'optima'}} href="/">Home</Button>
                  </div>     
        </div>
    )


}
export default AccountDeletionSuccess