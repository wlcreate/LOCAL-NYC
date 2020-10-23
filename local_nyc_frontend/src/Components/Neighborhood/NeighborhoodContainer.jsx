import React from 'react';
import Neighborhood from './Neighborhood.jsx';
import { Card } from 'semantic-ui-react'


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
            <div className="neighborhoods">
                {/* <h1>These are the neighborhoods</h1> */}
                {/* <h2>Bronx</h2> */}
                <img className="neighborhoods" src={require('./Banners/Bronx.png')}  alt="Bronx"/>
                <div class="ui three cards">
                    {BronxNeighborhoods}
                </div>

                {/* <h2>Brooklyn</h2> */}
                <img className="neighborhoods" src={require('./Banners/Brooklyn.png')}  alt="Brooklyn"/>
                <div class="ui three cards">
                    {BrooklynNeighborhoods}
                </div>
                
                {/* <h2>Manhattan</h2> */}
                <img className="neighborhoods" src={require('./Banners/Manhattan.png')}  alt="Manhattan"/>
                <div class="ui three cards">
                    {ManhattanNeighborhoods}
                </div>

                {/* <h2>Queens</h2> */}
                <img className="neighborhoods" src={require('./Banners/Queens.png')}  alt="Queens"/>
                <div class="ui three cards">
                    {QueensNeighborhoods}
                </div>

                {/* <h2>Staten Island</h2> */}
                <img className="neighborhoods" src={require('./Banners/StatenIsland.png')}  alt="Staten Island"/>
                <div class="ui three cards">
                    {StatenIslandNeighborhoods}
                </div>
            </div>
        )
    }
}


export default NeighborhoodContainer;

{/* <div class="ui six cards">
    <div class="ui raised card">
        <div class="image">
            <img src="/images/wireframe/image.png"/>
             */}