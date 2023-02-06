import React  from "react";
import '../styles/Characters.css';




function Character({characterId}) {




    return(
        <div className="char_wrapper">
            <div className="chara_box"> 
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />

              <button className="link_btn">
                                    
              </button>           
            </div>
        </div>
    )
}

export default Character;