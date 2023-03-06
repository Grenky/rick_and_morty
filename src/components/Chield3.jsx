import React from "react"
import  { TitleContext } from "./Character";

export default function Chield() {

    const { example } = React.useContext(TitleContext);

  

    return(
        <div className="chiled3_wrapper">
          <button className="kek_btn" onClick={example}>
            Hi!
            </button>
        </div>
    )
}