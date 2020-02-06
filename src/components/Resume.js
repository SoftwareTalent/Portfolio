import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row skill">
          <div className="twelve columns header-col">
               <h1><span>Skills</span></h1>
          </div>
          <div className = "six columns">
            <div className="bars">
                <ul className="skills">
                    {
                      resumeData.skills_1 && resumeData.skills_1.map((item) => {
                        return(
                          <li>
                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
                            <em>{item.skillname}</em>
                          </li>
                        )
                      })
                    }
                </ul>
              </div>
          </div>
          <div className = "six columns">
            <div className="bars">
                <ul className="skills">
                    {
                      resumeData.skills_2 && resumeData.skills_2.map((item) => {
                        return(
                          <li>
                          <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                          </span><em>{item.skillname}</em>
                          </li>
                        )
                      })
                    }
                </ul>
              </div>
          </div>
   			</div>
     </section>
    );
  }
}