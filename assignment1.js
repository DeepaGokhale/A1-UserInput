import React, { Component } from 'react'
import UserInput from './UserInput1/userInput'
import UserOutput from './UserOutput1/useroutput'

class assignment1 extends Component {

    state = {
            userName: "Deepa",
            country: "India",
            hobby: "painting!"
    }

    updateName = (event) => {
        this.setState(
            {
                userName: event.target.value
            }
        );
    }

    headerStyle = {
        color: 'red'
    }


    render() {
        return (
            <div>
                <UserInput style={this.headerStyle} changed={this.updateName} currentName={this.state.userName} />
                <UserOutput name={this.state.userName} country={this.state.country} hobby={this.state.hobby}/>
            </div>
        )
    }

}

export default assignment1;