import React, { useState } from "react";
import { useRef } from "react";
import TestFrag from "./TestFrag";
import StyleButton from "./TestHOC";
import '../styles/About.css';


function About(props) {
 
    const  [count, setCount] = useState(0);
    const  [value, setValue] = useState('something');
    const  [check, setCheck] = useState(false);
  

   function simpleClick(e) {
        console.log(e)
        console.log('click')
    }

    function click() {
        alert('skot')
    }

    let testo = useRef(0);
  

    function useTesto() {
       return console.log(testo = useRef( 1 + 1 ));
    }

    useTesto(useState());


   const reduxTest = () => {
    console.log('hi!');
   }

    return(
        <div className="about_wrapper">
            <h2>{props.adata.adata}</h2>
            {/* <h2>Time now {new Date().toLocalTimeString()}.</h2> */}
              <button onClick={simpleClick}>simple click</button>
              <button onClick={click}>ska</button>
              <button onClick={() => setCount(prev => prev + 1)}>incremen</button>
              <button onClick={() => setCount(prev => prev - 1)}>decremen</button>
              <button onClick={() => setCount(prev => prev === 0)}>reset</button>
              <p>count{count}</p>
       
             <input value={value} onChange={(e) => setValue(e.target.value)}></input>
             <label >box Test</label>
             <input type="checkbox"  onChange={() => setCheck(!check)}></input>
            <TestFrag />
            <StyleButton />
            <button className="redtest" onClick={reduxTest}></button>
        </div>
    )
}



export default About;