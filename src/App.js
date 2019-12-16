import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dash from './components/Dash';
import PrivateRoute from './components/PrivateRoute';
import './App.css'
import AuthContextProvider from './contexts/AuthContext'
function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Switch>          
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={Login}/>
              <PrivateRoute exact path='/dash' component={Dash}/>
              <Route path='*'>
                <Redirect to='/'/>
              </Route>          
          </Switch>
        </AuthContextProvider>
      </Router>      
    </div>
  );
}

export default App;
