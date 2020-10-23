import React from 'react';

const CategoryFilter = (props) => {

    let handleChange = (evt) => {
        props.changeSelectedCategory(evt.target.value)
    }

    return (
        <div>
            <p><strong>Filter for a spot by category!</strong></p>
            <select value={props.selectedCategory} onChange={handleChange}>
                <option value={"All"}>All</option>
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
        </div>
    )
}

export default CategoryFilter