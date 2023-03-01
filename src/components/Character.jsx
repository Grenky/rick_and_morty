import React  from "react";
import '../styles/Characters.css';



function Character(props) {

    return(
        <div className="char_wrapper">
            <div className="chara_box"> 
                   <p>{props.name}</p>     
            </div>
        </div>
    )
}

export default Character;