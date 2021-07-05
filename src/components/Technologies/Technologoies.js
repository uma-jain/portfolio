import React from 'react'
import { DiNodejs, DiReact, DiMongodb } from 'react-icons/di';

import "./Technologies.css"

function Technologoies() {
    return (
        <div className="tech">
        <h5 className="title">Technologies</h5>
        <p className="title-content">  I've worked with a range a technologies in the web development world.
      From Back-end To Design</p>
      <ul>
          <li>
          <picture>
          <DiReact size="5em" />
          </picture>
              <p class="subtitle">Front-End</p>
              <p class="subtitle-content">
              Experiece with <br />
                React.js and Redux
              </p>
          </li>
          <li>
          <picture>
          <DiNodejs size="5rem"/>
          </picture>
              <p class="subtitle">Back-End</p>
              <p class="subtitle-content">
              Experiece with <br />
                Node.js and Express
              </p>
          </li>

          <li>
          <picture >
          <DiMongodb size="5rem" />
          </picture>
              <p class="subtitle">Databases</p>
              <p class="subtitle-content">
              Experiece with <br />
               MongoDB And MYSQL
              </p>
          </li>
          
      </ul>
            
        </div>
    )
}

export default Technologoies
