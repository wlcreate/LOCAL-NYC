import React from 'react';
import InfoContainer from './InfoContainer.jsx';

class SpotContainer extends React.Component{
    
        state = {
            spot: "",
        }

    componentDidMount(){
        fetch(`http://localhost:3000/neighborhoods/${this.props.neighborhood_id}/spots/${this.props.spot_id}`, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(response => response.json())
        .then(spotObj => {
            this.setState({
                spot: spotObj
            })
        })
    }
    
    render(){
        // let {name, address, info} = this.state.spot.spot
        return(
            <div>
                {this.state.spot
            ?
            <div>
                <h1>This is the Spot Component</h1>
                <h2>{this.state.spot.spot.name}</h2>
                <h3>{this.state.spot.spot.address}</h3>
                <InfoContainer stringOfInfo={this.state.spot.spot.info}/>
             </div>
            :
            null
            }
            </div>
        )
    }
}

export default SpotContainer