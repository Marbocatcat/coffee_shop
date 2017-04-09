import React from 'react';

export default class InviteRoot extends React.Component {
  render() {
    return (
      <div className="Invite">
        <div className="container">
          <div className="row">
            <Invite />
          </div>
        </div>
      </div>
    )
  }
}

const Invite = () => {
  return (
    <div className="getInvite">
      <h3>Koffee Shop is a unique coffee shop located at the heart of Chicago aimed to server your inner hipster. Not Showering for weeks is welcome and is encouraged here.</h3>
    </div>

  )
}
