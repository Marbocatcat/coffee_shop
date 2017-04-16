import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Login from './components/Section-Hero/Nav-Bar/Login';
import { BrowserRouter, Match, Miss } from 'react-router';
import NotFound from './components/Error-401/NotFound';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={ App }/>
        <Match exactly pattern="/Login" component={ Login }/>
        <Miss component={ NotFound }/>
      </div>
    </BrowserRouter>
  )
};

render(<Root />, document.getElementById("app"));
