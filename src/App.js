import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dash from './components/Dash';
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/dash' component={Dash}/>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
