import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/foodDetails/:foodId">
              <FoodDetails></FoodDetails>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
