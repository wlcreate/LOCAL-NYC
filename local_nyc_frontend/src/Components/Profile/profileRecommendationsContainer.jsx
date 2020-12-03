import React from 'react';
import ProfileRecommendation from './profileRecommendation.jsx';

class ProfileRecommendationsContainer extends React.Component{

    state = {
        recommendations: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.user.id}/recommendations`, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(response => response.json())
        .then(arrayOfRecommendations => {
            this.setState({
                recommendations: arrayOfRecommendations
            })
        })
    }

    render(){
        
        let arrayOfComponents = this.state.recommendations.map(recommendationObj => {
            return <ProfileRecommendation 
                key={recommendationObj.id}
                recommendation={recommendationObj}
            />
        })

        return(
            <div id="profile-recommendations">
                <h2 id="profile-recommendation-h2">My Recommendations</h2>
                {arrayOfComponents}
            </div>
        )
    }
}

export default ProfileRecommendationsContainer;