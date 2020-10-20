import React from 'react';
import ProfileRecommendationsContainer from './profileRecommendationsContainer.jsx';
import ProfileModal from './profileModal.jsx';
// import ReactModal from '../reactModal.jsx';

class ProfileContainer extends React.Component{

    render(){
        // debugger
        let {full_name, username, bio} = this.props.user
        return(
            <div>
                <h1>{username}</h1>
                <p>{full_name}</p>
                <p>{bio}</p>
                {/* <button onClick={this.handleClick}>Edit My Profile</button> */}
                <ProfileModal />
                <ProfileRecommendationsContainer
                    user={this.props.user}
                    token={this.props.token}
                />
            </div>
        )
    }
}

export default ProfileContainer;