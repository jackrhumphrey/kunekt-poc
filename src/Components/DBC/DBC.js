import React from "react";
import qr from '../../qr.png'



export default class DBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="qr-img">
          <img src={qr} alt="QR Code" style={{ width: '200px', height: '200px', backgroundColor: 'red' }}/>
          <hr></hr>
        </div>
        <div>
          <h3>Private</h3>
          <h3>Work</h3>
          <h3>Custom</h3>
        </div> 
      </div>
    );
  }
}
