import React  from "react";
import '../styles/Characters.css';
// import Character from "./Character";
import { useEffect, useState } from 'react';
import axios from 'axios';

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
              <p>{console.log(typeof(characters[0]))}</p>
            </div>
      )
  }
  
  export default Characters;