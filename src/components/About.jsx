import React from "react";
import { Link } from "react-router-dom";
import Test from "./Test";

function About(props) {
    function form() {
        function handlerSubmit(e) {
            e.preventDefault();
            console.log('form is send')
        }
    }
    return(
        <div className="about_wrapper">
            <h2>{props.adata.adata}</h2>
            {/* <h2>Time now {new Date().toLocalTimeString()}.</h2> */}
            <Test />
            
        </div>
    )
}



export default About;