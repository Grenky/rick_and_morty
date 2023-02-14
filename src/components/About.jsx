import React from "react";
import Test from "./Test";

function About(props) {
 

   function simpleClick(e) {
        console.log(e)
        console.log('click')
    }

    function click() {
        alert('skot')
    }

 

    return(
        <div className="about_wrapper">
            <h2>{props.adata.adata}</h2>
            {/* <h2>Time now {new Date().toLocalTimeString()}.</h2> */}
              <button onClick={simpleClick}>simple click</button>
              <button onClick={click}>ska</button>
            <Test />
             
        </div>
    )
}



export default About;