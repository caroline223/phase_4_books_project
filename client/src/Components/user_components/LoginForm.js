import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

function LoginForm({ setUser }) {

  const history = useHistory()
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

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
      })
  }


  return(
    <div>
       <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='purple' textAlign='center'>
       Log-in to your account
      </Header>
      {/* <Redirect to="/login" /> */}
      <Form size='large' onSubmit={handleSubmit}>
        <Segment stacked>
          <Form.Input 
            fluid 
            icon='user' 
            iconPosition='left' 
            placeholder='Username'
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button color='purple' fluid size='large'>
            Login
          </Button>
          <br />
          <Button a href="/" fluid size='large'>
            Home
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
    </div>
  )
}
  
 


export default LoginForm