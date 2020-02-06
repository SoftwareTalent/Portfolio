import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <h5>@2020 LuanNguyanThanh.</h5> 
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#header"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}