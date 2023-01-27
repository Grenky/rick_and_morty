import React  from "react";
import '../styles/Characters.css';
import Character from "./Character";

function Characters() {
  
      return(
          <div className="char_wrapper">
            <Character characterId={271}/>
            <Character characterId={192}/>
            <Character characterId={594}/>
            <Character characterId={328}/>
            <Character characterId={529}/>
            <Character characterId={679}/>
            </div>
      )
  }
  
  export default Characters;