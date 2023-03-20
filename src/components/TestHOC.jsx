import React from "react";


const WhiteStyle = (WrappeCommponent, style) => {
    return(props) => {
        const mergedProps = { ...props, style};
        return <WrappeCommponent {...mergedProps} />;
    };
};


const Button = ({onclick, style}) => (
    <button onClick={onclick} style={style}>Click!</button>
);

const StyleButton = WhiteStyle(Button, {backgroundColor : 'green', color : 'white'});

export default function About() {
    return <StyleButton onClick={() => console.log('Clicked!!!')} />;
};