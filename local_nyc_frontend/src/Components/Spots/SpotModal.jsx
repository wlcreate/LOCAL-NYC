import React, { useState } from 'react';
// import reactModal from '../reactModal.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SpotModal(props) {

    // sets the state for the Modal
    let [show, setShow] = useState(false)

    // sets the input state for the form
    let [name, setName] = useState("")
    let [address, setAddress] = useState("")
    let [info, setInfo] = useState("")
    let [category, setCategory] = useState("Bar")

    let handleClose = () => setShow(false)
    let handleShow = () => setShow(true)

    let handleSubmit = (evt) => {
        evt.preventDefault()
        fetch(`http://localhost:3000/neighborhoods/${props.neighborhood_id}/spots`, {
            method: "POST",
            headers: {
                "Authorization": localStorage.token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                address,
                info,
                category
            })
        })
        .then(response => response.json())
        .then(newSpot => {
            // debugger
            props.addSpotToState(newSpot)
        })
    }

    return (
        <>
        <Button id="spot-modal" variant="primary" onClick={handleShow}>
            Add a Spot
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Spot</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit}>
                    <label htmlFor="category">Category</label>
                    <select value={category} onChange={e => {setCategory(e.target.value)}}>
                        <option value={"Bar"}>Bar</option>
                        <option value={"Coffee & Tea"}>Coffee and Tea</option>
                        <option value={"Cultural Center"}>Cultural Center</option>
                        <option value={"Dog Park"}>Dog Park</option>
                        <option value={"Live Music Venue"}>Live Music Venue</option>
                        <option value={"Museum"}>Museum</option>
                        <option value={"Observation Deck"}>Observation Deck</option>
                        <option value={"Park"}>Park</option>
                        <option value={"Performing Arts Venue"}>Performing Arts Venue</option>
                        <option value={"Restaurant"}>Restaurant</option>
                        <option value={"Rock-climbing Gym"}>Rock Climbing Gym</option>
                        <option value={"Shopping"}>Shopping</option>
                        <option value={"Zoo"}>Zoo</option>
                    </select>
                    <br></br>
                    <label htmlFor="name">Name of Spot</label>
                    <input type="text" autoComplete="off"
                        name="name"
                        value={name}
                        onChange={e => {setName(e.target.value)}}
                    />
                    <br></br>
                    <label htmlFor="address">Address</label>
                    <input type="text" autoComplete="off"
                        name="address"
                        value={address}
                        onChange={e => {setAddress(e.target.value)}}
                    />
                    <br></br>
                    <label htmlFor="info">Info</label>
                    <input type="text" autoComplete="off"
                        name="info"
                        value={info}
                        onChange={e => {setInfo(e.target.value)}}
                    />
                    <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default SpotModal;
