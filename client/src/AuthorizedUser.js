import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookContainer from './Components/home_components/BookContainer';
import BookReviewsContainer from './Components/home_components/BookReviewsContainer';
import AuthorContainer from './Components/author_components/AuthorContainer';
import Author from './Components/home_components/Author'
import AuthorBooksContainer from './Components/author_components/AuthorBooksContainer';
import PersonalBookContainer from './Components/user_components/personal_library_components/PersonalBookContainer';

function AuthorizedUser({ setUser }){

    return(
        <Switch>
            <Route exact path="/books">
                <BookContainer setUser={setUser} />
            </Route>
            <Route exact path="/authors">
                <AuthorContainer setUser={setUser} />
            </Route>
            <Route exact path="/authors/:id">
                <Author setUser={setUser} />
            </Route>
            <Route exact path="/books/:id">
                <BookReviewsContainer setUser={setUser} />
            </Route>
            <Route exact path="/authors/books/:id">
                <AuthorBooksContainer setUser={setUser} />
            </Route>
            <Route exact path="/mylibrary">
                <PersonalBookContainer setUser={setUser} />
            </Route>
        </Switch>
    )

}

export default AuthorizedUser