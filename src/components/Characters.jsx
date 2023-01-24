import React  from "react";
import '../styles/Characters.css';
import axios from 'axios';


function Characters() {

    const url = "https://rickandmortyapi.com/api/character/271";

  axios.get(url).then((res) => {
    console.log(res.data.image)
  })



   
    return(
        <div className="char_wrapper">
            <h1 className="char_title">all characters</h1>
            <div className="chara_box">
            
            </div>
        </div>
    )
}

export default Characters;