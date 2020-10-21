import React from 'react';
import SpotCard from './SpotCard.jsx';

class SpotsContainer extends React.Component{

    state = {
        spots: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/neighborhoods/${this.props.neighborhood_id}/spots`, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(response => response.json())
        .then(arrayOfSpots => {
            this.setState({
                spots: arrayOfSpots
            })
        })
    }

    render(){

        let arrayOfComponents = this.state.spots.map(spotObj => {
            return <SpotCard
                key={spotObj.id}
                spot={spotObj}
                neighborhood_id={this.props.neighborhood_id}
                changeSpotID={this.props.changeSpotID}
            />
        })

        console.log(arrayOfComponents)

        return(
            <div>
                <h1>These are the spots</h1>
                {arrayOfComponents}
            </div>
        )
    }
}

export default SpotsContainer