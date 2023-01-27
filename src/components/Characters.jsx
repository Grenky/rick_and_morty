import React  from "react";
import '../styles/Characters.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Characters() {

  const url = "https://rickandmortyapi.com/api/character/271";

  // axios.get(url).then((res) => {
  //   console.log(res.data.image)
  // })

  const [vagina, setVagina] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(data => {
        setVagina(data.data)});
  }, []);

    return(
        <div className="char_wrapper">
            <h1 className="char_title">all characters</h1>
            <div className="chara_box">
            {vagina.map(vaginas => {
              return(
                <p>{vaginas.image}</p>
              );
            })}
            </div>
        </div>
    )
}

export default Characters;