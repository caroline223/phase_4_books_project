import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Card, Button } from 'semantic-ui-react'


function AccountInformation({ setUser }){

    const { id } = useParams()
    const history = useHistory()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        fetch(`/users/${id}`)
        .then((response) => response.json())
        .then((user) => {
            setUsername(user.username)
            setEmail(user.email)
        })
    }, [id])

    const deleteAccount = (event) => {
        const id = parseInt(event.target.id)
        if(window.confirm("Are you sure?"))
        fetch(`/users/${id}`, { 
            method: 'DELETE'
        })
        .then((response) => {
            if(response.ok){
                setUser(null)
                history.push('/deleted')
            }
        })
    }


    return(
        <div className='infoPage'>
            <br /><br />
            <div className='h1'>Account Information</div>
            <br />
            <div className='cardPosition'>
                 <Card className='description' >
                        <Card.Content>
                        Username: {username} 
                        <br /><br />
                        Email Address: {email}
                        </Card.Content>
                </Card>
            </div>
            
                
            
            
            <div style={{textAlign: 'center'}}>
                <Button style={{fontFamily: 'optima'}} href="/books">Back</Button>&nbsp;&nbsp;
                <Button style={{fontFamily: 'optima'}} onClick={deleteAccount}>Delete Account</Button>
            </div>
        </div>
    )


}
export default AccountInformation