import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className = "twelve columns header-col">
               <h1><span>ABOUT</span></h1>
            </div>
            <div className="six columns">
               <img className="profile-pic"  src="images/profile.jpg" alt="" />
            </div>

            <div className="six columns main-col">
               <p>
                  <div dangerouslySetInnerHTML={{ __html: resumeData.aboutme }} />
               </p>
            </div>
         </div>
      </section>
    );
  }
}