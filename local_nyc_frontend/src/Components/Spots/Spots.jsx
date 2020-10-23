import React from 'react';
import SpotsContainer from './SpotsContainer.jsx';
import SpotModal from './SpotModal.jsx';
import SpotsSearch from './SpotsSearch';
import CategoryFilter from './CategoryFilter.jsx';

class Spots extends React.Component{

    state = {
        spots: [],
        neighborhood: "",
        searchTerm: "",
        selectedCategory: "All"
    }

    componentDidMount(){
        fetch(`http://localhost:3000/neighborhoods/${this.props.neighborhood_id}/spots`, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(response => response.json())
        .then(arrayOfSpots => {
            this.setState({
                spots: arrayOfSpots,
                neighborhood: arrayOfSpots[0].neighborhood.name
            })
        })
    }

    addSpotToState = (newSpot) => {
        let copyOfSpots = [...this.state.spots, newSpot]
        this.setState({
            spots: copyOfSpots
        })
    }

    // logic for updating the search term
    changeSearchTerm = (userInput) => {
        this.setState({
            searchTerm: userInput
        })
    }

    changeSelectedCategory = (chosenCategory) => {
        this.setState({
          selectedCategory: chosenCategory
        })
    }     

    // ! Cannot choose a category -> search; can only search -> category
    findSpots = () => {
        if (this.state.spots !== [] && this.state.selectedCategory === "All"){
            let searchedSpots = this.state.spots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return searchedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Bar"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Coffee & Tea"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Cultural Center"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Dog Park"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Live Music Venue"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Museum"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Observation Deck"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Park"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Performing Arts Venue"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Restaurant"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Rock Climbing Gym"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === "Rock-climbing Gym"
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Shopping"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } else if (this.state.spots !== [] && this.state.selectedCategory === "Zoo"){
            let categorizedSpots = this.state.spots.filter(spot => {
                return spot.category.name === this.state.selectedCategory
            })
            categorizedSpots.filter(spot => {
                return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
            })
            return categorizedSpots
        } 
    }

    render(){

        let searchedSpots = this.state.spots.filter(spot => {
            return spot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })

        return(
            <div>
                <h1 id="spotName">{this.state.neighborhood}</h1>
                <div id="spot-container">
                    <div id="spot-search">
                        <SpotsSearch searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm}/>
                    </div>
                    <div id="category-filter">
                        <CategoryFilter selectedCategory={this.state.selectedCategory} changeSelectedCategory={this.changeSelectedCategory}/>
                    </div>
                </div>
                <div>
                    <SpotsContainer spots={this.findSpots()} changeSpotID={this.props.changeSpotID}/>
                </div>
                <SpotModal neighborhood_id={this.props.neighborhood_id} addSpotToState={this.addSpotToState}/>
            </div>
        )
    }
}

export default Spots