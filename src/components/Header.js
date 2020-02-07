import React, { Component } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min'
import NET from 'vanta/dist/vanta.net.min'
import Typist from 'react-typist';

export default class Header extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {

    this.vantaEffect = NET({
      el: this.vantaRef.current,
      backgroundAlpha:0,
      mouseControls: true,
      touchControls: true,
      minHeight: 1200.00,
      minWidth: 1200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3fc6ff
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    let resumeData = this.props.resumeData;

    return (
      <React.Fragment>
      
      <header id="header" ref={this.vantaRef}>
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Skills</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner" >
            <div className="banner-text">
                <Typist avgTypingDelay = {150}>
                <Typist.Delay ms = {1500} />
                  <h1 className="responsive-headline">I am {resumeData.name}.</h1>
                </Typist>
                <Typist>
                <Typist.Delay ms = {5500}/>
                <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am an {resumeData.role}.{resumeData.roleDescription}
                </h3>
                </Typist>
               <hr/>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}