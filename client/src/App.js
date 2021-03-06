import React from 'react';
import './App.css';
import Home from './components/Home'
import Products from './components/Products'
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/' component={Home} />
          <Route exact component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
