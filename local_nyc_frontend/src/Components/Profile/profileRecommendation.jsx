import React from 'react';

class ProfileRecommendation extends React.Component{
    render(){
        // debugger
        let {context} = this.props.recommendation
        let {name, address} = this.props.recommendation.spot
        return(
            <div id="profile-recommendation">
                <h3>{name}</h3>
                <p>{address}</p>
                <p>{context}</p>
            </div>
        )
    }
}

export default ProfileRecommendation;