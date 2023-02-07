import React from "react";


export default class Test extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleon: true};

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick() {
        this.setState(prevState => ({
            isToggleon: !prevState.isToggleon
        }));
    }
    render() { 
        return(
            <div className="test_wrapper">
                <button onClick={this.nandlerClick}>
                    {this.state.isToggleon ? "on" : "off"}
                </button>
                <p>shit</p>
            </div>
        )
    }
}