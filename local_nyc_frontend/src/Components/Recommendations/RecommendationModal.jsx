import React, { useState } from 'react';
// import reactModal from '../reactModal.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function RecommendationModal(props) {

    // sets the state for the Modal
    let [show, setShow] = useState(false)

    // sets the input state for the form
    let [context, setContext] = useState("")


    let handleClose = () => setShow(false)
    let handleShow = () => setShow(true)

    let handleSubmit = (evt) => {
        evt.preventDefault()
        let {user_id, spot_id} = props
        fetch(`http://localhost:3000/neighborhoods/${props.neighborhood_id}/spots/${props.spot_id}/recommendations`, {
            method: "POST",
            headers: {
                "Authorization": localStorage.token,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                context,
                user_id,
                spot_id
            })
        })
        .then(response => response.json())
        .then(newRec => {
            props.addRecommendationToState(newRec)
        })
    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Add a Recommendation
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Recommendation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit}> 
                    <label htmlFor="context">Your Recommendation</label>
                    <input type="text" autoComplete="off"
                        name="context"
                        value={context}
                        onChange={e => {setContext(e.target.value)}}
                    />
                    <br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default RecommendationModal;
