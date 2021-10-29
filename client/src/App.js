import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BookContainer from './Components/home_components/BookContainer';
import BookReviewsContainer from './Components/home_components/BookReviewsContainer';
import AuthorContainer from './Components/author_components/AuthorContainer';
import Author from './Components/home_components/Author'
import AuthorBooksContainer from './Components/author_components/AuthorBooksContainer';
import LoginForm from './Components/user_components/LoginForm';
import SignUpForm from './Components/user_components/SignUpForm';
import HomePage from './Components/HomePage';
import PersonalBookContainer from './Components/user_components/personal_library_components/PersonalBookContainer';


function App() {
  return (
   <Router>
     <Switch>
       <Route exact path ="/home" component={HomePage} />
       <Route exact path="/books" component={BookContainer} />
       <Route exact path="/authors" component={AuthorContainer} />
       <Route exact path="/authors/:id" component={Author} />
       <Route exact path="/books/:id" component={BookReviewsContainer} />
       <Route exact path="/authors/books/:id" component={AuthorBooksContainer} />
       <Route exact path="/login" component={LoginForm} />
       <Route exact path ="/signup" component={SignUpForm} />
       <Route exact path ="/mylibrary" component={PersonalBookContainer} />
     </Switch>
   </Router>
  );
}

export default App;
