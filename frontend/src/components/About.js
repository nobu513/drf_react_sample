import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
    
    return (
        <div style={{textAlign:'center'}}>
            <h2 style={{justifyContent:"center"}}><Link to="/">Tasks</Link> | <Link to="/about">About</Link></h2>
            <p>this is my potofolio project.</p>
        </div>
    )
}

export default About
