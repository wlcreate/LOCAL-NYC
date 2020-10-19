import React from 'react';

class ProfileRecommendations extends React.Component{
    render(){
        // debugger
        return(
        <h1>Name: {this.props.user.username}</h1>
        )
    }
}

export default ProfileRecommendations;