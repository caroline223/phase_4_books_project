import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function LoginForm({ setUser }) {

  const history = useHistory()
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
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
            setErrors(errors.error)
          })
        }
      })
  }


  return(
    <div id='loginPage'>
       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='purple' textAlign='center'>
        <div style={{fontFamily: 'optima', color: 'lightgray', fontWeight: 'bold', fontSize: '38px'}}>
          Account Login
        </div>
      </Header>
      {/* <Redirect to="/login" /> */}
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid 
            required
            icon='user' 
            iconPosition='left' 
            placeholder='Username'
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <Form.Input
            fluid
            required
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button color='gray' fluid size='large'>
            <div style={{fontFamily: 'optima'}}>
              Login
            </div>
          </Button>
          <br />
          <Button href="/" fluid size='large'>
             <div style={{fontFamily: 'optima'}}>
              Home
            </div>
          </Button>
        </Segment>
      </Form>
      <Message style={{fontFamily: 'cursive'}}>
        New to us? &nbsp; <a href='/signup'>Sign Up</a>
      </Message>
      <Message style={{fontFamily: 'optima'}}>
        {errors}
      </Message>
    </Grid.Column>
  </Grid>
  
    </div>
  )
}
  
 


export default LoginForm