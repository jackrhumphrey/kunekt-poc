import React from "react";
import qr from "../../Images/qr.jpg";
import wa from "../../Images/whatsapp.png"
import gm from "../../Images/gmail.png"
import ig from "../../Images/instagram.png"
import tw from "../../Images/twitter.png"
import wb from "../../Images/web.png"
import yt from "../../Images/youtube.png"
import li from "../../Images/linkedin.png"


export default class DBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="DBC-container">
        <div className="qr-container">
          <div className="qr-img">
            <img src={qr} alt="QR Code" style={{ width: '150px', height: '150px' }}/>
            <hr></hr>
          </div>  
        </div>
        
        <div className="title-container">
          <div className="titles">
            <h3 className='private-title' >Private</h3>
            <h3 className='work-title'>Work</h3>
            <h3 className='cistom-title'>Custom</h3>
          </div>
        </div>

        <div className="contact-container">
          <div className="contact-opt">
            <img className="contact-icon" src={wa} alt="whatsapp"/>
            <p className="contact-descption">WhatsApp</p>
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={gm} alt="gmail"/>
            <p className="contact-descption">Gmail</p>
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={ig} alt="instagram"/>
            <p className="contact-descption">Instagram</p>
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={tw} alt="twitter"/>
            <p className="contact-descption">Twitter</p>
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={wb} alt="twitter"/>
            <p className="contact-descption">Website</p>
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={yt} alt="youtube"/>
            <p className="contact-descption">YouTube</p>
          </div>

          <div className="contact-opt">
            <img className="contact-icon" src={li} alt="linkedin"/>
            <p className="contact-descption">LinkedIn</p>
          </div>
        </div>
      </div>

    );
  }
}
