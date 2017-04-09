import React from 'react';

export default class HeroRoot extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Section Hero">
          <div className="container">
              <div className="row">
                <Hero />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

{/* NAV BAR */}

class Nav extends React.Component {
  render() {
    const Links=["Our Store", "Our Offer", "Gallery", "Menu", "Contact"];

    return (
      <nav className="twelve columns nav-bar">
          <a id="logo" href="">Koffee</a>
          <ul className="navbar-list">
              <Link Link={Links}/>
          </ul>
      </nav>
    )
  }
}

class Link extends React.Component {
  render() {
    const ListItems = this.props.Link.map((key) =>
      <a href="" className="navbar-link">{key}</a>
    );

    return (
      <li className="navbar-item">
        {ListItems}
      </li>
    )
  }
}

const Hero = () => {
  return (
    <div className="Greet">
        <MenuOffer />
    </div>
  )
}

const MenuOffer = () => {
  return (
    <div className="Offer">
    </div>
  )
}
