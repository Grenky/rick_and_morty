import React from "react";
import '../styles/Characters.css';
import Character from "./Character";
import { useEffect, useState } from 'react';
import axios from 'axios';
import TestProps from "./TestProps";

function Characters() {

  const [characters, setCharacters] = useState([]);
  const url = "https://rickandmortyapi.com/api/character/";



  useEffect(() => {
    axios
      .get(url)
      .then(response => { 
        setCharacters(response.data.results)});
  }, []);
  





      return(
          <div className="char_main_wrapper">
              {characters.map(characters => <img src={characters.image} alt={characters.name} key={characters.name}></img>)}
              <Character name={'Gena'}/>
              <TestProps foo={1 + 2 + 3 + 4} />
            </div>
      )
  }
  
  export default Characters;