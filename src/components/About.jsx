import React, { useState } from "react";
import Test from "./Test";

function About(props) {
 
    const  [count, setCount] = useState(0);

   function simpleClick(e) {
        console.log(e)
        console.log('click')
    }

    function click() {
        alert('skot')
    }

    const countBtn = (event) => {
        setCount(count + 1);
    }

    return(
        <div className="about_wrapper">
            <h2>{props.adata.adata}</h2>
            {/* <h2>Time now {new Date().toLocalTimeString()}.</h2> */}
              <button onClick={simpleClick}>simple click</button>
              <button onClick={click}>ska</button>
              <button onClick={countBtn}>count{count}</button>
            <Test />
             
        </div>
    )
}



export default About;