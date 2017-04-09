import React from 'react';

export default class ShowRoot extends React.Component {
  render() {
    return (
      <div className="Section-ShowCase">
        <div className="container">
          <div className="row">
            <div className="one-half column ShowImage">
              <img src="../image/placeholder.png" alt="" className="u-max-full-width"/>
            </div>
            <div className="one-half column ShowImage">
              <img src="../image/placeholder.png" alt="" className="u-max-full-width"/>
            </div>
          </div>
          <div className="row">
            <div className="one-half column ShowImage">
              <img src="../image/placeholder.png" alt="" className="u-max-full-width"/>
            </div>
            <div className="one-half column ShowImage">
              <img src="../image/placeholder.png" alt="" className="u-max-full-width"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
