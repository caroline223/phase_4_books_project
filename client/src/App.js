import './App.css';
import BookContainer from './Components/home_components/BookContainer';
import AuthorContainer from './Components/author_components/AuthorContainer';
import Author from './Components/home_components/Author'
import BookReviewsContainer from './Components/home_components/BookReviewsContainer';
import LoginForm from './Components/user_components/LoginForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthorBooksContainer from './Components/author_components/AuthorBooksContainer';


function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/books" component={BookContainer} />
       <Route exact path="/authors" component={AuthorContainer} />
       <Route exact path="/authors/:id" component={Author} />
       <Route exact path="/books/:id" component={BookReviewsContainer} />
       <Route exact path="/authors/books/:id" component={AuthorBooksContainer} />
       <Route exact path="/login" component={LoginForm} />
     </Switch>
   </Router>
  );
}

export default App;
