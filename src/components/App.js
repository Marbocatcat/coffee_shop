import React from 'react';
import HeroRoot from './Section-Hero/HeroRoot';
import InviteRoot from './Section-Invite/InviteRoot';
import ShowRoot from './Section-Showcase/ShowRoot';



export default class App extends React.Component {
  render() {
    return (
      <div>
        <HeroRoot />
        <InviteRoot />
        <ShowRoot />
      </div>
    )
  }
}
