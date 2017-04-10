import React from 'react';


const InviteRoot = () => {
  const message = "Koffee Shop is a unique coffee shop located at the heart of Chicago aimed to server your inner hipster. Not Showering for weeks is welcome and is encouraged here.";
  return (
    <div className="Invite">
      <div className="container">
        <div className="row">
          <Invite message={ message } />
        </div>
      </div>
    </div>
  )
};

const Invite = (props) => {
  return (
    <div className="getInvite">
      <h3>{ props.message }</h3>
    </div>
  )
};

export default InviteRoot;
