import React from 'react';
import SpotCard from './SpotCard.jsx';

class SpotsContainer extends React.Component{
    render(){

        let arrayOfComponents = this.props.spots.map(spotObj => {
            return <SpotCard
                key={spotObj.id}
                spot={spotObj}
                neighborhood_id={this.props.neighborhood_id}
                changeSpotID={this.props.changeSpotID}
            />
        })

        return(
            <div class="ui three cards">
                {arrayOfComponents}
            </div>
        )
    }
}

export default SpotsContainer