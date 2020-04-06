import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      
      
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="May's Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Being an Industrial Designer, I have a strong ability to build projects from scratch
                        with a sense of satisfaction knowing that my product design can help others. I’m in a current
                        transition through a full-stack Bootcamp, where I am developing a Survey web page, taking Agile
                        methodology as a base while using Front-End tools like JavaScript, HTML5, CSS3 & React
                        frameworks and Back-End tools like Node.js servers and SQL databases. I realized that I can keep
                        on building products or services that can reach beyond phyisical barriers and give the best
                        solutions to users.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Mayra Regalado</span><br />
						   <span>Gdl, Mx.
                   </span><br />
						   <span>3332012819</span><br />
                     <span>maiira.regalado@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
