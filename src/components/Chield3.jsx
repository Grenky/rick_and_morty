import React from "react"

export default function Chield(props) {

    

    return(
        <div className="chiled3_wrapper">
          <button className="kek_btn">
            {props.children}
            </button>
        </div>
    )
}