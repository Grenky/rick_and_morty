import React from "react";
import { createContext } from "react";



const TitleContext = createContext();


export default class  Ccomponent  extends  React.Component {

    

    press() {
        console.log(this);
        alert('hello clown')
    }

    render() {
       
        return (
            <button onClick={() => this.press()}>click</button>
          
        )
    }
}