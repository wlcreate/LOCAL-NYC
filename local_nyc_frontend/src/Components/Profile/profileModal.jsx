import React, { useState } from 'react';
// import reactModal from '../reactModal.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ProfileModal(props) {

    // sets the state for the Modal
    let [show, setShow] = useState(false)

    // sets the input state for the form
    let [username, setUsername] = useState("")
    let [first_name, setFirstName] = useState("")
    let [last_name, setLastName] = useState("")
    let [bio, setBio] = useState("")
    let [password, setPassword] = useState("")

    let handleClose = () => setShow(false)
    let handleShow = () => setShow(true)

    let handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/users/${props.user.id}/`, {
            method: "PATCH",
            headers: {
                "Authorization": localStorage.token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                first_name,
                last_name,
                bio,
                password
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            props.updateProfileInfo(response.user)
            // debugger
        })
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Edit my Profile
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Your Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit}> 
                    <label id="profile-label" htmlFor="username">Username</label>
                    <input id="profile-input" type="text" autoComplete="off"
                        name="username"
                        value={username}
                        onChange={e => {setUsername(e.target.value)}}
                    />
                    <br></br>
                    <label id="profile-label" htmlFor="first_name">First name</label>
                    <input id="profile-input" type="text" autoComplete="off"
                        name="first_name"
                        value={first_name}
                        onChange={e => {setFirstName(e.target.value)}}
                    />
                    <br></br>
                    <label id="profile-label" htmlFor="last_name">Last name</label>
                    <input id="profile-input" type="text" autoComplete="off"
                        name="last_name"
                        value={last_name}
                        onChange={e => {setLastName(e.target.value)}}
                    />
                    <br></br>
                    <label id="profile-label" htmlFor="bio">Bio</label>
                    <textarea id="profile-bio-input" type="text" autoComplete="off"
                        name="bio"
                        value={bio}
                        onChange={e => {setBio(e.target.value)}}
                    />
                    <br></br>
                    <label id="profile-label" htmlFor="password">Password</label>
                    <input id="profile-input" type="password" autoComplete="off"
                        name="password"
                        value={password}
                        onChange={e => {setPassword(e.target.value)}}
                    />
                    <br></br>
                    <input class="home submit" type="submit" value="Submit"/>
                </form>
            </Modal.Body>
            {/* <Modal.Footer>
                <button variant="secondary" onClick={handleClose}>
                    Close
                </button>
                <button variant="primary" onClick={handleClose}>
                    Save Changes
                </button>
            </Modal.Footer> */}
        </Modal>
        </>
    )
}

export default ProfileModal;

//     state = {
//         modal: false,
//         username: "",
//         first_name: "",
//         last_name: "",
//         bio: ""
//     }

//     handleChange = (evt) => {
//         this.setState({
//             [evt.target.name]: evt.target.value
//         })
//     }

    

//     render(){
//         let {username, first_name, last_name, bio} = this.state
//         return(
//             <Modal>
                // <form onSubmit={this.handleSubmit}> 
                //     <h1>Edit Your Profile</h1>
                //     <label htmlFor="username">Username</label>
                //     <input type="text" autoComplete="off"
                //         name="username"
                //         value={username}
                //         onChange={this.handleChange}
                //     />
                //     <br></br>
                //     <label htmlFor="first_name">First name</label>
                //     <input type="text" autoComplete="off"
                //         name="first_name"
                //         value={first_name}
                //         onChange={this.handleChange}
                //     />
                //     <br></br>
                //     <label htmlFor="last_name">Last name</label>
                //     <input type="text" autoComplete="off"
                //         name="last_name"
                //         value={last_name}
                //         onChange={this.handleChange}
                //     />
                //     <br></br>
                //     <label htmlFor="bio">Username</label>
                //     <input type="text" autoComplete="off"
                //         name="bio"
                //         value={bio}
                //         onChange={this.handleChange}
                //     />
                //     <br></br>
                //     {/* <label htmlFor="password">Password</label>
                //     <input type="password" autoComplete="off"
                //         name="password"
                //         value={password}
                //         onChange={this.handleChange}
                //     />
                //     <br></br> */}
                //     <input type="submit" value="Submit"/>
//                 </form>
//             </Modal>
//         )
//     }
// }

// handleSubmit = (evt) => {
//     evt.preventDefault()
//     fetch(`http://localhost:3000/users/${this.props.user.id}/`, {
//         method: "PATCH",
//         headers: {
//             "Authorization": localStorage.token
//         },
//         body: JSON.stringify({

//         })
//     })
// }