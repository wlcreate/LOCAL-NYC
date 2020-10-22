import React from 'react';

class SpotRecommendation extends React.Component{

    handleClick = (evt) => {
        // ! ONLY IF THE USER IS THE USER WHO MADE THE REC SHOULD ALL THIS HAPPEN
        fetch(`http://localhost:3000/neighborhoods/${this.props.neighborhood_id}/spots/${this.props.spot_id}/recommendations/${this.props.recommendation.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then((deletedObj) => {
            this.props.deleteRecommendationFromState(deletedObj)
        })
    }

    render(){
        // debugger
        let {context} = this.props.recommendation
        let {username} = this.props.recommendation.user
        return(
            <div>
                <p>{context}</p>
                <p>User: {username}</p>
                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default SpotRecommendation;