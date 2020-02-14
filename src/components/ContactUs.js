import React, { Component } from 'react';
import axios from 'axios';

export default class ContactUs extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        email: '',
        phone: '',
        subject:'',
        description: ''
        
    }
}

onChangeName(e){
  this.setState({
      name: e.target.value
  });
}

onChangeEmail(e){
  this.setState({
      email: e.target.value
  });
}

onChangePhone(e){
  this.setState({
      phone: e.target.value
  });
}

onChangeSubject(e){
  this.setState({
      subject: e.target.value
  });
}

onChangeDescription(e){
  this.setState({
      description: e.target.value
  });
}


onSubmit(e) {
  e.preventDefault();

  console.log(`Name: ${this.state.name}`);
  console.log(`Email: ${this.state.email}`);
  console.log(`Phone: ${this.state.phone}`);
  console.log(`Subject: ${this.state.subject}`);
  console.log(`Description: ${this.state.description}`);

  const newTodo = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      description: this.state.description
  }

  axios.post('https://potfoliobackend.herokuapp.com/add', newTodo)
      .then(res => console.log(res.data));

  this.setState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      description: '' 
  })
}

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
                  <form id="contactForm" onSubmit = {this.onSubmit}>
                    <div className="six columns">
                        <input type="text"  
                        size="35" id="contactName" 
                        name="contactName"
                        value = {this.state.name}
                        onChange={this.onChangeName} 
                        placeholder = "Your name"
                        required
                        />
                        <input type="text"  
                        size="35" 
                        id="contactName" 
                        name="contactName" 
                        value = {this.state.email}
                        onChange={this.onChangeEmail} 
                        placeholder = "Phone"
                        required
                        />
                    </div>
                    <div className="six columns">
                        <input type="text"  
                        size="35" 
                        id="contactName" 
                        name="contactName" 
                        value = {this.state.phone}
                        onChange={this.onChangePhone} 
                        placeholder = "Email"
                        required
                        />
                        <input type="text"  
                        size="35" 
                        id="contactName" 
                        name="contactName" 
                        value = {this.state.subject}
                        onChange={this.onChangeSubject} 
                        placeholder = "Subject"
                        required
                        />
                    </div>
                  
                    <div className = "twelve columns" style = {{textAlign: 'center'}} >
                      <textarea 
                      cols="70" 
                      rows="4" 
                      id="contactMessage" 
                      name="contactMessage" 
                      placeholder = "Brief Descriptoin of the App"
                      value = {this.state.description}
                      onChange = {this.onChangeDescription}
                      >
                      </textarea>
                      <button type = "submit" className="submit">Send</button>
                      <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                      </span>
                    </div>
                    </form>
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
