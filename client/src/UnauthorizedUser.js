import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from '../src/Components/user_components/LoginForm'
import SignUpForm from '../src/Components/user_components/SignUpForm'
import HomePage from '../src/Components/HomePage'


function UnauthorizedUser({ setUser }){

    return(
        <Switch>
            <Route exact path="/">
                <HomePage setUser={setUser} />
            </Route>
            <Route exact path="/login">
                <LoginForm setUser={setUser} />
            </Route>
            <Route exact path="/signup">
                <SignUpForm setUser={setUser} />
            </Route> 
            <Redirect to="/" />
        </Switch>
    )
}

export default UnauthorizedUser