import './App.css';
import BookContainer from './Components/home_components/BookContainer';
import AuthorContainer from './Components/author_components/AuthorContainer';
import Author from './Components/home_components/Author'
import AuthorBooks from './Components/author_components/AuthorBooks'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/books" component={BookContainer} />
       <Route exact path="/authors" component={AuthorContainer} />
       <Route exact path="/authors/:id" component={Author} />
       <Route exact path="/books/:id" component={AuthorBooks} />
     </Switch>
   </Router>
  );
}

export default App;
