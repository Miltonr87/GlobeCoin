import React from 'react';
import { createGlobalStyle } from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/sigIn';
import Chat from './components/Chat';
/* import NavBar from './components/NavBar'; */

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ubuntu;
}

`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SignIn} />
          <Route path="/chatroom" component={Chat} />
        </Switch>
      </Router>
    </>
  )
};

export default App;
