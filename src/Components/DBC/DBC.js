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
        <img src={qr} alt="QR Code" style={{ width: '200px', height: '200px' }}/>
        <hr></hr>
        This is DBC
        <input id="blabla" />
        <input id="blabla" />
        <input id="blabla" />
      </div>
    );
  }
}
