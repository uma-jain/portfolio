import React from 'react'
import "./Footer.css"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
    return (
        <footer id="footer">
        <ul>
            <li>
                  <p className="ul-name">Call</p>
                  <p className="value">7083192202</p>
            </li>
            <li>
                 <p className="ul-name">Email</p>
                  <p className="value">umajain1000@gmail.com</p>
            </li>
        </ul>
        <div class="social-items-holder">
            <a href="https://github.com/uma-jain" target="_blank">
            <AiFillGithub size="3rem" />
            </a>
            <a href="https://www.linkedin.com/in/uma-jain-2485b4171/" target="_blank">
            <AiFillLinkedin size="3rem" />
            </a>
            <a href="https://www.instagram.com/the_umajain/" target="_blank">
            <AiFillInstagram size="3rem" />
            </a>
            </div>
        </footer>
    )
}

export default Footer
