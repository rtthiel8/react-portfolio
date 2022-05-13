import React from 'react';
import Headshot from '../../assets/Headshot.jpg'

function About() {
  return (
    <section id="about">
      <div className='row'>
        <div className='column'>
          <h3>Bio</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim sit amet venenatis urna. Cras pulvinar mattis nunc sed. Duis tristique sollicitudin nibh sit. Quis risus sed vulputate odio ut enim blandit. Ac tortor dignissim convallis aenean et. Morbi tristique senectus et netus et malesuada fames ac turpis. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Et netus et malesuada fames ac.
            Eget gravida cum sociis natoque penatibus et magnis. Sem integer vitae justo eget magna. Cursus turpis massa tincidunt dui ut ornare. Egestas diam in arcu cursus euismod. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Et leo duis ut diam quam nulla porttitor. Facilisis mauris sit amet massa vitae. Velit ut tortor pretium viverra suspendisse. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Sem integer vitae justo eget. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Eget duis at tellus at urna condimentum mattis pellentesque id. Consequat interdum varius sit amet mattis vulputate enim.</p>
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