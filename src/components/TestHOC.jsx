import React from "react";


const whiteStyle = (WrappeCommponent, style) => {
    return(props) => {
        const mergedProps = { ...props, style};
        return <WrappeCommponent {...mergedProps} />;
    };
};


const Button = ({onclick, style}) => (
    <button onClick={onclick} style={style}>Click!</button>
);

const StyledButton = whiteStyle(Button, {backgroundColor : 'green', color : 'white'});

export default function About() {
    return <StyledButton onClick={() => console.log('Clicked!!!')} />;
};