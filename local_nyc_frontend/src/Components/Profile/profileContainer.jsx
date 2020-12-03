import React from 'react';
import ProfileRecommendationsContainer from './profileRecommendationsContainer.jsx';
import ProfileModal from './profileModal.jsx';
// import ReactModal from '../reactModal.jsx';

class ProfileContainer extends React.Component{

    state = {
        full_name: this.props.user.full_name,
        username: this.props.user.username,
        bio: this.props.user.bio,
        password: this.props.user.password
    }

    updateProfileInfo = (updatedUserObj) => {
        this.setState({
            full_name: updatedUserObj.full_name,
            username: updatedUserObj.username,
            bio: updatedUserObj.bio,
            password: updatedUserObj.password
        })
    }

    render(){
        // debugger
        let {full_name, username, bio} = this.state
        return(
            <div id="profile-page">
                <h1>{username}</h1>
                <p>{full_name}</p>
                <p>{bio}</p>
                {/* <button onClick={this.handleClick}>Edit My Profile</button> */}
                <ProfileModal user={this.props.user} updateProfileInfo={this.updateProfileInfo}/>
                <ProfileRecommendationsContainer
                    user={this.props.user}
                    token={this.props.token}
                />
            </div>
        )
    }
}

export default ProfileContainer;