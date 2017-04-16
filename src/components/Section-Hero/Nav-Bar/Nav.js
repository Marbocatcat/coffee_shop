import React from 'react';


export default class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = { lift: "lift"};
  }

  handleMouseEnter = (props) => {
    console.log('event activated')
    const newState="lift-active";
    this.setState({ lift: newState });
  };

  handleMouseLeave = (props) => {
    const newState="lift";
    this.setState({ lift: newState });
  };

  render() {
    const setClass=this.state.lift;
    return (
      <nav className="twelve columns nav-bar">
          <a id="sideKick" href="">got beans?</a>
          <Login handleMouseLeave={ this.handleMouseLeave } handleMouseEnter={ this.handleMouseEnter} setClass={ setClass }/>
      </nav>
    )
  };
}

const Login = (props) => {
  return (
      <a id="login" href="/Login" className={ props.setClass } onMouseEnter={ props.handleMouseEnter} onMouseLeave={ props.handleMouseLeave } >
        <span >Login</span>
      </a>
  )
};
