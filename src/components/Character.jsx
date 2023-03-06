import '../styles/Characters.css';
import React, { useContext } from "react";
import Chield3 from './Chield3';

// const TitleContext = React.createContext();

function Character(props) {


    return(
        <div className="char_wrapper">
            <div className="chara_box"> 
                   <p>{props.name}</p>
                   {/* <TitleContext value = "hi!">
                    <Chield3 />
                   </TitleContext> */}
                   <Chield3 />
            </div>
        </div>
    )
}


export default Character;

