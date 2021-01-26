import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/sigIn';
import Chat from './components/Chat';
/* import NavBar from './components/NavBar'; */

function App() {
  return (
    <Router>
    
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/chatroom" component={Chat} />
      </Switch>
    </Router>
  )
};

export default App;
