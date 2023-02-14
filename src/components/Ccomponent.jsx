import React from "react";

export default class  Ccomponent  extends  React.Component {

    press() {
        console.log(this);
        alert('hello clown')
    }
    render() {
        return <button onClick={() => this.press()}>click</button>
    }
}