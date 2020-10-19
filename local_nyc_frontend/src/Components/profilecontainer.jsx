import React from 'react';
import ProfileRecommendations from './Components/profilecontainer.jsx';

class ProfileContainer extends React.Component{
    render(){
        return(
            <div>
                <h1>Name: {this.props.user.username}</h1>
                <ProfileRecommendations />
            </div>
        )
    }
}

export default ProfileContainer;