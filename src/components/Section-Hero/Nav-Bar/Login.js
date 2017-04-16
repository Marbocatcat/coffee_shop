import React from 'react';

const Login = () => {
  return (
    <div className="login-section">
      <div className="container">
        <form className="form-login">
          <h1>Sign In</h1>
          <div className="row login-form">
            <div className="twelve columns ">
              <label htmlFor="exampleEmailinput" className="">Username</label>
              <input type="email" placeholder="text@mailbox.com" id="exampleEmailinput" className="u-full-width"/>
            </div>
          </div>
          <div className="row login-form">
            <div className="twelve columns ">
              <label htmlFor="exampleEmailinput" className="">Username</label>
              <input type="email" placeholder="text@mailbox.com" id="exampleEmailinput" className="u-full-width"/>
            </div>
          </div>
          <div className="button">
            Sign In
          </div>
        </form>
      </div>
    </div>
  )
};



export default Login;
