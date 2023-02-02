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
  
  // function keyreg(min, max, n) {
  //  let res = new Set();
  //  while(res.size < n) res.add(Math.floor(Math.random()* (max - min + 1)) + min);
  //   return res;
  // }  
  // console.log(keyreg(0, 20, 5));

      return(
          <div className="char_main_wrapper">
              {characters.map(characters => <img src={characters.image} alt={characters.name}></img>)}

            </div>
      )
  }
  
  export default Characters;