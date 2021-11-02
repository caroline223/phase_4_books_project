import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

function SignUpForm({ onLogin }){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const handleSubmit = (event) => {
        alert("Your form has been submitted. Please return to the login page.")
        event.preventDefault()
        fetch("/signup", {
            method: "POST",
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
        .then((response) => {
            if (response.ok){
                response.json()
                .then((user) => onLogin = user )
            }
        })

    }

    return(
     <div>
        <br />
        <div className="h1">Create An Account</div>
        <Form onSubmit={handleSubmit}>
            
            <Form.Input label='Email' 
                        placeholder='joe@schmoe.com' 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
            <Form.Input label='Create Username' 
                        placeholder='username' 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
            <Form.Input label='Create Password' 
                        type='password' 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
            <Form.Input label='Confirm Password' 
                        type='password' 
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
        

        
            <div className="buttonPosition"> 
            <Button>Submit</Button>
            <Button a href="/login">Back</Button>
            </div>
        </Form>
    </div>
    )

}

export default SignUpForm