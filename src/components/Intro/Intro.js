import React from 'react'
import "./Intro.css"
import  BackAni from "./BackgrounfAnimation"

function Intro() {
    return (
        <div class="intro">
         <div class="intro-text">
            <h1 class="title">
                Hello I'm <span>Uma Jain ,</span>
                <br />
                A Full-Stack Developer
            </h1>
            <h2 class="title-content mr-40">
            I am a web developer with a vast array of knowledge in many different front end and back end languages,
             responsive frameworks, databases, and best code practices. 
             <br />My objective is simply to be the best web developer that I can be and to contribute to the technology industry with all that
              I know and can do.
            </h2>
            <button class="btn-grad"><a href="#project">View My Work</a></button>
         </div>
        <div className="animation-holder">         
        <BackAni></BackAni>
        </div>
        </div>
    )
}

export default Intro
