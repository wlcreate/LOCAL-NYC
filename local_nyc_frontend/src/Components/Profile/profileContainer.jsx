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
                <div id="profile-info">
                    <h2>{full_name}</h2>
                    <p>Username: {username}</p>
                    <p>About me: {bio}</p>
                    <ProfileModal user={this.props.user} updateProfileInfo={this.updateProfileInfo}/>
                </div>
                {/* <button onClick={this.handleClick}>Edit My Profile</button> */}
                <ProfileRecommendationsContainer
                    user={this.props.user}
                    token={this.props.token}
                />
            </div>
        )
    }
}

export default ProfileContainer;