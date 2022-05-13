import React from 'react';
import Headshot from '../../assets/Headshot.jpg'

function About() {
  return (
    <section id="about">
      <div className='row'>
        <div className='column'>
          <h3>Bio</h3>
          <p>My name is Ryan and I am learning web development.  Having just finished a bootcamp through the University of Wisconsin Extended Campus, I am currently looking for opportunities in this exciting career field.</p>
          <p>I graduated from UW-Milwaukee in 2011 with a bachelors in journalism and mass communications.  Since then, I have worked in the service industry in various capacities.  Most of my experience has been in restaurant serving and bartending, with some catering as well.</p>
          <p>Having worked in the service industry for over 15 years, I have a great deal of experience interacting with customers and sharing knowledge and information with them.  I am also well versed in working with a team in a fast-paced ever-changing environment.  I believe these skills will translate well into the field of technology.</p>
        </div>
        <div className='column'>
          <img
            src={Headshot}
            alt="Headshot"
            style={{ height: "300px", width: "220px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;