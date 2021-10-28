import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import ErrorPage from './pages/Error';
import './styles/foodapp.css'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/cart">
            <CartPage/>
          </Route>
          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
