import React from "react";


export default class Test extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleon: !prevState.isToggleOn
        }));
    }

   

    render() { 
        return(
            <div className="test_wrapper">
                <button onClick={this.nandleClick}>
                    {this.state.isToggleOn ? console.log("on") : console.log("off")}
                    click
                </button>
              
            </div>
        )
    }
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Toggle />);