import React from "react";


function About() {
    return(
        <div className="about_wrapper">
            <h2>Time now {new Date().toLocaleTimeString()}.</h2>
        </div>
    )
}

export default About;