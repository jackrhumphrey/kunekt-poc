import React from "react";
import Switch from "react-switch";
import qr from "../../Images/qr.jpg";
import wa from "../../Images/whatsapp.png"
import gm from "../../Images/gmail.png"
import ig from "../../Images/instagram.png"
import tw from "../../Images/twitter.png"
import wb from "../../Images/web.png"
import yt from "../../Images/youtube.png"
import li from "../../Images/linkedin.png"
import "../../Stylesheets/Share/Share.css"

export default class Share extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(checked) {
    this.setState({checked})
  }
  render() {
    return (
      <div className="DBC-container">
        <div className="qr-container">
          <div className="qr-img">
            <img src={qr} alt="QR Code" style={{ width: '150px', height: '150px', display: 'block', margin: 'auto' }}/>
            <hr></hr>
          </div>  
        </div>
        
        <div className="title-container">
          <div className="titles">
            <h3 className='private-title' >Private</h3>
            <h3 className='work-title'>Work</h3>
            <h3 className='custom-title'>Custom</h3>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-opt">
            <img className="contact-icon" src={wa} alt="whatsapp"/>
            <p className="contact-descption">WhatsApp</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={gm} alt="gmail"/>
            <p className="contact-descption">Gmail</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={ig} alt="instagram"/>
            <p className="contact-descption">Instagram</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={tw} alt="twitter"/>
            <p className="contact-descption">Twitter</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={wb} alt="twitter"/>
            <p className="contact-descption">Website</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={yt} alt="youtube"/>
            <p className="contact-descption">YouTube</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={li} alt="linkedin"/>
            <p className="contact-descption">LinkedIn</p>
            <Switch
              className="dbc-switch" 
              onChange={this.handleChange} 
              checked={this.state.checked} 
            />
          </div>
        </div>
      </div>

    );
  }
}
