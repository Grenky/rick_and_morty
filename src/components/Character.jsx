import '../styles/Characters.css';
import React from "react";
import Chield3 from './Chield3';

export const TitleContext = React.createContext();

function Character(props) {

   

    function example() {
        console.log("clown");
    }
 

    return(
        <div className="char_wrapper">
            <div className="chara_box"> 
                   <p>{props.name}</p>
                   <TitleContext.Provider value ={example}>
                    <Chield3 />
                   </TitleContext.Provider>
            </div>
        </div>
    )
}


export default Character;

