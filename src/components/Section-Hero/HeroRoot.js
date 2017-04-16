import React from 'react';
import Nav from './Nav-Bar/Nav';

const HeroRoot = () => {
  const subHeader = "Most good things start with a cup of coffee."
  return (
        <div className="Section Hero">
            <Nav />
          <div className="container">
              <div className="row">
                <Hero subHeader={ subHeader } />
              </div>
          </div>
        </div>
  )
};

const Hero = (props) => {
  return (
    <div>
      <span className="subHeader">
        { props.subHeader }
      </span>
    </div>

  )
};

export default HeroRoot;
