import React from 'react';

class Spot extends React.Component{
    render(){
        return(
            <h1>{this.props.spot.name}</h1>
        )
    }
}

export default Spot