import React from 'react';
import ReactGA from 'react-ga';


import Travel from './travel'
import './App.css';

function initializeReactGA() {
  ReactGA.initialize('UA-65379042-2');
  ReactGA.pageview('/homepage');
}

function App() {
  initializeReactGA()
  return (
    <>
      <Travel />
    </>
  );
}

export default App;
