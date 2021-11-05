import React from 'react'
import { Switch, Route } from 'react-router-dom'
import BookContainer from './Components/authorized_user_components/book_components/BookContainer';
import BookReviewsContainer from './Components/authorized_user_components/book_components/BookReviewsContainer';
import AuthorContainer from './Components/authorized_user_components/author_components/AuthorContainer';
import Author from './Components/authorized_user_components/book_components/Author'
import AuthorBooksContainer from './Components/authorized_user_components/author_components/AuthorBooksContainer';
import PersonalBookContainer from './Components/authorized_user_components/personal_library_components/PersonalBookContainer'

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