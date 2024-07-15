import React from 'react';

const Nav = () => {
  return (
    <div className="container-fluid" id="navbars">
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom" style={{ width: '100%' }}>
        <a className="navbar-brand" href="#" style={{ color: 'white' }}>BKB</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="navlist" className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#aboutme">ABOUT ME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#education">EDUCATION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#skills">SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#certificates">CERTIFICATE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: 'white' }} href="#contact-me">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
