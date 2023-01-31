import React  from "react";
import '../styles/Characters.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


function Character({characterId}) {

  const url = `https://rickandmortyapi.com/api/character/${characterId}`;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios
      .get(url)
      .then(response => { 
        setCharacter(response.data)});
  }, []);

    return(
        <div className="char_wrapper">
            <div className="chara_box"> 
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />

              <button className="link_btn">
                <Link className='vagina-link' to='Vagina'>details</Link>                      
              </button>           
            </div>
        </div>
    )
}

export default Character;