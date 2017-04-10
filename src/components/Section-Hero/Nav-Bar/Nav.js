import React from 'react';


const Nav = () => {
  const Links=["Our Store", "Our Offer", "Gallery", "Menu", "Contact"];
  return (
    <nav className="twelve columns nav-bar">
        <a id="logo" href="">Koffee</a>
        <ul className="navbar-list">
            <Link Link={ Links }/>
        </ul>
    </nav>
  )
};

const Link = (props) => {
  const ListItems = props.Link.map((key) =>
    <a href="" className="navbar-link">{key}</a>
  );
  return (
    <li className="navbar-item">
      { ListItems }
    </li>
  )
};

export default Nav;
