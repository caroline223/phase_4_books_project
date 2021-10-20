import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const SignUpForm = () => (
    <div>
        <h1>Sign Up Form</h1>
    <Form success>
        <Form.Input label='First Name' placeholder='first name' />
        <Form.Input label='Last Name' placeholder='last name' />
        <Form.Input label='Email' placeholder='joe@schmoe.com' />
        <Form.Input label='Password' type='password' />
        <Form.Input label='Confirm password' type='password' />

        <Message
            success
            header='Form Completed'
            content="You're all signed up! Please return to the login page to access your new account."
        />   
    <Button>Submit</Button>
    <Button a href="http://localhost:4000/books">Home</Button>
  </Form>
  </div>


)

export default SignUpForm