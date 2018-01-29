import React from 'react';
// Access components individually for smaller build files (RECOMMENDED)
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';
import Content from './Content';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div>
    <Appbar>
      <Container>
        <img src={logo} className="App-logo" alt="logo" />
      </Container>
    </Appbar>
    <header className="App App-header">
      <h1 className="App-title">Welcome to Sample App</h1>
    </header>
    <Container>
      <Content />
    </Container>
  </div>
);

export default App;
