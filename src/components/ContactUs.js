import React, { Component } from 'react';

export default class ContactUs extends Component {

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
            <div className = "row">
              <h1><span>CONTACT</span></h1> 
            </div>
          <div className="row">
            <div className = "twelve columns">
              <div className = "six columns">
                <div className = "row contactinfo">
                  <div className = "six colmuns ">
                    <img className = "contact_img" src = "./images/address.png"/>
                    <p>105 YenHoa Street, HaNoi, Vietnam</p>
                  </div>
                  <div className = "six colmuns ">
                    <img className = "contact_img" src = "./images/email.png"/>
                    <p>luannguyen0318@gmail.com</p>
                  </div>
                </div>
                <div className = "row contactinfo">
                  <div className = "six colmuns ">
                    <img className = "contact_img" src = "./images/phone.png"/>
                    <p>+84349751836</p>
                  </div>
                  <div className = "six colmuns ">
                    <img className = "contact_img" src = "./images/skype.png"/>
                    <p>brightm0430@outlook.com</p>
                  </div>
                </div>
              </div>
          
            <div className = "six columns">
              <div className = "row" style = {{textAlign: 'center'}}>
                <h2>Get In Touch.</h2>
                {/* <h4>Fill out the form below to discuss your project with me</h4> */}
              </div>
              <br></br>
              <div className="row">
                <div className = "twelve columns">
                  <div className="six columns">
                    <form action="" method="post" id="contactForm" name="contactForm">
                         <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} placeholder = "Your name"/>
                         <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} placeholder = "Phone"/>
                    </form>
                  </div>
                  <div className="six columns">
                      <form action="" method="post" id="contactForm" name="contactForm">
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} placeholder = "Email"/>
                           <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange} placeholder = "Subject"/>
                      </form>
                  </div>
                    <div className = "twelve columns" style = {{textAlign: 'center'}} >
                      <textarea cols="70" rows="4" id="contactMessage" name="contactMessage" placeholder = "Brief Descriptoin of the App"></textarea>
                      <button className="submit">Send</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                    <div id="message-warning"> Error boy</div>
                    <div id="message-success">
                      <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                    </div>
                  </div>
                </div>
            </div>
            </div>
         </div>
        </section>
        );
  }
}
