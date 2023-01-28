import React  from "react";
import '../styles/Characters.css';
import Character from "./Character";

function Characters() {
  
      return(
          <div className="char_main_wrapper">
            {/* <h1 className="char_title">all characters</h1> */}
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