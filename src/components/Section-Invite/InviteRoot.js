import React from 'react';


const InviteRoot = () => {
  const title = "The Story"
  return (
    <div className="Invite">
      <div className="container">
        <div className="row">
          <Invite title={ title } />
        </div>
      </div>
    </div>
  )
};

const Invite = (props) => {
  return (
    <div className="getInvite">
      <span>
        { props.title }
      </span>
    </div>
  )
};

export default InviteRoot;
