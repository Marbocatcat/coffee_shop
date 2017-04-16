import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


{ /*Component variables need to be UPPERCASE!!!!!!!! */ }



export default class ShowRoot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {image: "../image/showpage.jpg"};
  }

  switch = (props) => {
    const newImage = "../image/photo.jpg";
    this.setState({image: newImage})
  }

  render() {
    const image = this.state.image;
    return (
      <div>
        <button className="button" onClick={ this.switch }>Switch</button>
        <ImgCarousel imgSrc={ image } />
      </div>
    )
  }
};

const ImgCarousel = (props) => {
  return (
    <CSSTransitionGroup
      transitionName="carousel"
      transitionEnterTimeout={2000}
      transitionLeaveTimeout={2000}>
      <img className="Slide" src={ props.imgSrc } key={ props.imgSrc } alt=""/>
    </CSSTransitionGroup>
  )
};
