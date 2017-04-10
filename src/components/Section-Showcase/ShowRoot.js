import React from 'react';

const ShowRoot = () => {
  const image = "../image/placeholder.png";
  return (
    <div className="Section-ShowCase">
      <div className="container">
        <div className="row">
          <ShowImage image={image}/>
          <ShowImage image={image}/>
        </div>
        <div className="row">
          <ShowImage image={image}/>
          <ShowImage image={image}/>
        </div>
      </div>
    </div>
  )
};

const ShowImage = (props) => {
  return (
      <div className="one-half column ShowImage">
        <img src={ props.image } alt="" className="u-max-full-width"/>
      </div>
  )
};

export default ShowRoot;
