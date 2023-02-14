import React from "react";
import Yes from "./Yes";
import No from "./No";

function RenderTest() {
    
    const ask = prompt('who are you')

    function Registration() {
        if(ask === true) {
            alert('welcome')
        } else {
            alert('huh?')
        }  
    }

    if(Registration) {
        return <Yes />
    }
    return <No />


 
}

export default RenderTest;