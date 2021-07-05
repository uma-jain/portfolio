import React from 'react'
import "./Projects.css"
import { projects } from './projectList';


function Projects() {
    return (
        <div className="projects" id="#project"> 
             <h5 className="title">Projects</h5>
             <div className="project-list mr-40"  >
             {projects.map((p, i) => {
                 return (
                    <div className="blogCard">
                          
                        <img src={(p.image).default}></img>
                          <h4 className="ptitle">{p.title}        </h4>
                          <hr></hr>
                          <p className="ptitle-content">{p.description}  </p>
                         
                          <div>
                          <hr></hr>
                          <h4 className="ptitle1">Stack</h4>
                          <div className="tag-list">
                            {
                                p.tags.map((t, i) => {
                            return (<h5 className="tag" key={i}>{t}</h5>)
                            }) 
                            }
                            </div>
                            <div className="list">
              <a href={p.visit} target="_blank">Code</a>
              <a href={p.source} target="_blank">Source</a>
            </div>
                
                          </div>  
                          </div>       
          
                 )
             })
             }
             </div>
        </div>
    )
}

export default Projects
