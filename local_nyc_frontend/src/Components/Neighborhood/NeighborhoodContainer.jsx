import React from 'react';
import Neighborhood from './Neighborhood.jsx';
import {Bronx} from './photos/bronx.jpg';


class NeighborhoodContainer extends React.Component{

    state = {
        neighborhoods: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/neighborhoods", {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(response => response.json())
        .then(arrayOfNeighborhoods => {
            this.setState({
                neighborhoods: arrayOfNeighborhoods
            })
        })
    }

    render(){

        let arrayOfComponents = this.state.neighborhoods.map(neighborhoodObj => {
            return <Neighborhood
                key={neighborhoodObj.id}
                neighborhood={neighborhoodObj}
                changeNeighborhoodID={this.props.changeNeighborhoodID}
            />
        })

        let BronxNeighborhoods = arrayOfComponents.slice(0, 5)
        let BrooklynNeighborhoods = arrayOfComponents.slice(5, 10)
        let ManhattanNeighborhoods = arrayOfComponents.slice(10, 15)
        let QueensNeighborhoods = arrayOfComponents.slice(15, 20)
        let StatenIslandNeighborhoods = arrayOfComponents.slice(20, 25)

        return(
            <div>
                <h1>These are the neighborhoods</h1>
                <h2>Bronx</h2>
                <img src={Bronx} alt="bronx"/>
                {BronxNeighborhoods}
                <h2>Brooklyn</h2>
                {BrooklynNeighborhoods}
                <h2>Manhattan</h2>
                {ManhattanNeighborhoods}
                <h2>Queens</h2>
                {QueensNeighborhoods}
                <h2>Staten Island</h2>
                {StatenIslandNeighborhoods}
            </div>
        )
    }
}


export default NeighborhoodContainer;