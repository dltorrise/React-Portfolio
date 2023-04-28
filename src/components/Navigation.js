import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul style={{backgroundColor: "#2874A6"}} id="navigation" className="d-flex flex-column nav navbar">
      <li  className="nav-item">
        <a style={{backgroundColor: "#2874A6"}}
          href="#about-me"
          onClick={() => handlePageChange('AboutMe')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'AboutMe' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a style={{backgroundColor: "#2874A6"}}
          href="#projects"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Portfolio' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a style={{backgroundColor: "#2874A6"}}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a style={{backgroundColor: "#2874A6"}}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active text-white' : 'nav-link text-white'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
