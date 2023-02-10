import React from "react";
import {  useState, useEffect } from "react";
import axios from "axios";
import '../styles/Something.css';


function Something() {
    
    const [test, setTest] = useState({});
    const [test2, setTest2] = useState({});
    const url = "https://rickandmortyapi.com/api/character/364";
    const url2 = "https://rickandmortyapi.com/api/character/684";


    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            setTest(response.data)});
    }, []);


    useEffect(() => {
        axios
        .get(url2)
        .then(response => {
            setTest2(response.data)});
    }, []);

    const array = [1, 2, 3, 4];


    return(
        <div className="some_wrapper">   
           <div>
                <img src={test.image} alt={test.name}></img>
                <p className="info">name: {test.name}</p>
                <p className="info">status: {test.status}</p>
                <p className="info">species: {test.species}</p>
                <p className="info">type: {test.type}</p>
                <p className="info">gender: {test.gender}</p>
                
            </div>
            <div>
                <img src={test2.image} alt={test2.name}></img> 
                <p className="info2">name: {test2.name}</p>
                <p className="info2">status: {test2.status}</p>
                <p className="info2">species: {test2.species}</p>
                <p className="info2">type: {test2.type}</p>
                <p className="info2">gender: {test2.gender}</p>   
            </div>
            {array.map(arrayItem  => <li key={arrayItem}>{arrayItem}</li>)}
        </div>
    )
}

export default Something;