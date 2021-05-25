
import './App.css';
import './Header.js';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Sidebar from './Sidebar';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will run only once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }else {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }

    })
  }, [])

  return (

    <Router>
      <div className="app">
        <Switch>

          <Route path="/checkout">
            <Header />
              <Sidebar />
              <Checkout />
      
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Sidebar />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
   
  );
}

 {/* We need react Router */}

      {/* localhost.com/ */}
      {/* localhost.com/checkout */}
      {/* localhost.com/login */}

export default App;
