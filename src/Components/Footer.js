import React, { Component } from 'react';

class Footer extends Component {
  render() {

   

    return (
      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
           <li key="linkedin"><a href="https://www.linkedin.com/in/mayra-regalado/"><i className="fa fa-linkedin"></i></a></li>
           <li key="github"><a href="http://github.com/Mayra-R"><i className="fa fa-github"></i></a></li>
           
           
           </ul>

           <ul className="copyright">
              <li>&copy; Copyright 2020 Mayra R.</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
    );
  }
}

export default Footer;
