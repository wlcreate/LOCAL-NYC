import React from 'react';

const InfoContainer = (props) => {
    let handleInfo = (info) => {
        let arrayOfInfo = this.props.stringOfInfo.split("/n")
        debugger
        let turnInfoToP = (array) => {
            arrayOfInfo.map(sentence => {
                <p>sentence</p>
            })
        }
        return turnInfoToP()
    }
    return (
        <div>
            {handleInfo}
        </div>
    )
}


export default InfoContainer