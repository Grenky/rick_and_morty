import React, { useState } from "react";
import '../styles/Yes.css';

function Yes() {

    const [show, setShow] = useState(true); 

    const showMessage = () => {
        setShow(!show)
    };

    let content = null;

    if(show) {
        content = (
            <>
                <h2>priw clown</h2>
            </>
        );    
    }

    return(
        <div className=" yes_wrapper">
            <h1 className="yes_title">Welcome!</h1>
            <button onClick={showMessage}>dawai</button>
            {content}
        </div>
    )
}

export default  Yes;