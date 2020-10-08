import React from 'react'
import './userOutput.css'

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p className="header">
                Hi I am {props.name}! I am from {props.country}
            </p>
            <p className="normalP">
                I love {props.hobby}
            </p>
        </div>
    )
}

export default userOutput;