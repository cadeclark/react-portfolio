import React from 'react'
import About from "../Compenents/About/about.js"
import Interests from "../Compenents/Interests/interests.js"
import Education from "../Compenents/Education/education.js"
import Projects from "../Compenents/Projects/projects.js"
import Skills from "../Compenents/Skills/skills.js"

export default function content() {
    return (
        <div className="container-fluid p-0">
            <About/>
            <hr class="m-0" />
            <Education/>
            <hr class="m-0" />
            <Skills/>
            <hr class="m-0" />
            <Interests/>
            <hr class="m-0" />
            <Projects/>
        </div>
    )
}
