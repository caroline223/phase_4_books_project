import React, { useState } from 'react'
import { Button, Form, Message, Segment, Grid, Header } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

function SignUpForm({ setUser }){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    const handleSubmit = (event) => {
        // alert("Your form has been submitted. Please proceed into your library.")
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                username, 
                password,
                email,
                password_confirmation: passwordConfirmation
            })
        })
        .then(response => {
            if (response.ok) {
              response.json()
              .then(user => {
                setUser(user)
                history.push('/books')
              })
            } 
            else {
                response.json()
                .then(errors => {
                    setErrors(errors.errors)
                })
            }
          })

    }

    return(
     <div className='miscellaneousPages'>
        <br />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='purple' textAlign='center'>
                <div style={{fontFamily: 'optima', color: 'lightgray', fontWeight: 'bold', fontSize: '38px'}}>
                Create An Account
                </div>
            </Header>
            <Form size='large' onSubmit={handleSubmit} style={{fontFamily: 'optima'}}>
                <Segment stacked>
                <Form.Input 
                    label="Enter Email Address"
                    required 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />             
                <Form.Input 
                        label="Create Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        />   
                <Form.Input 
                        label="Create Password"
                        type='password' 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        />
                 <Form.Input label='Confirm Password' 
                        type='password' 
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        required
                        />
                <Button  fluid size='large' style={{fontFamily: 'optima'}}>
                    Submit
                </Button>
                <br />
                <Button href="/login" fluid size='large' style={{fontFamily: 'optima'}}>
                    Back
                </Button>
                </Segment>
           
            <Message>
              {errors}  
            </Message>
            </Form>
            </Grid.Column>
        </Grid>          
    </div>
    )

}

export default SignUpForm