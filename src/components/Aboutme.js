import React from 'react';
import me from './Passport size.jpg'
const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className="container py-5">
        <div className="row">
          <div className="col cards2 ">
            <img src={me} className="card-img-top" alt="Profile" />
            <div>
              <a href="https://drive.google.com/file/d/1OJnDiJMQH7TOjiu9p02r05C-9CF1En7i/view?usp=drive_link" className="btn btn-primary cvbutton" >Download CV</a>
            </div>
          </div>
          <div className="col-sm-6 text-column">
            <h1>About Me</h1>
            <div className="info">
              <p>
                <span className="heading">NAME</span>:<span className="tiny"> BHASHKAR KUMAR</span>
              </p>
              <p>
                <span className="heading">DATE OF BIRTH</span>:<span className="tiny"> 22 JUNE 2004</span>
              </p>
              <p>
                <span className="heading">NATIONALITY</span>:<span className="tiny"> INDIAN</span>
              </p>
              <p>
                <span className="heading">PHONE</span>:<span className="tiny"> +91 8188946300</span>
              </p>
              <p>
                <span className="heading">EMAIL</span>:<span className="tiny"> bhashkarkumar2063@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
