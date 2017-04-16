import React from 'react';
import HeroRoot from './Section-Hero/HeroRoot';
import InviteRoot from './Section-Invite/InviteRoot';
import { BrowserRouter, Match } from 'react-router';
import ShowRoot from './Section-Showcase/ShowRoot';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <HeroRoot />
        <InviteRoot />
        <ShowRoot />
        <BrowserRouter>
          <Match pattern="/Story" component={ ShowRoot } />
        </BrowserRouter>
      </div>
    )
  }
};
