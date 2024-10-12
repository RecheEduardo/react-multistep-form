import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillCartCheckFill } from "react-icons/bs";
import './Footer.css'

const footer = () => {
  return (
    <div className="footer-container bg-dark bg-gradient">
      <footer className="footer-container d-flex flex-wrap justify-content-between align-items-center py-2 border-top px-4">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-md-0 text-light"><BsFillCartCheckFill /> <strong>Eduardo Reche</strong> | 2024</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex text-light">
          <li className="ms-3">
            <a className="text-light" href="https://www.linkedin.com/in/eduardorechemartins/" target="_blank">
              <svg className="bi" width="24" height="24">
                <FaLinkedin size={24}/>
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="https://github.com/RecheEduardo" target="_blank">
              <svg className="bi" width="24" height="24">
                <FaGithub size={24}/>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default footer;
