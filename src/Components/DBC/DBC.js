import React from "react";
import qr from "../../Images/qr.jpg";
import ph from "../../Images/ph-img.png"


export default class DBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="qr-img">
          <img src={qr} alt="QR Code" style={{ width: '200px', height: '200px' }}/>
          <hr></hr>
        </div>
        <div>
          <h3 className='title'>Private</h3>
          <h3 className='title'>Work</h3>
          <h3 className='title'>Custom</h3>
        </div> 
        <div className="contact-opt">
          <img src={ph} alt="placeholder"/>
          <p>Phone</p>
          
        </div>
      </div>
        
    );
  }
}
