import React from 'react';
import InfoContainer from './InfoContainer.jsx';
import RecommendationModal from '../Recommendations/RecommendationModal.jsx';
import SpotRecommendation from '../Recommendations/SpotRecommendation.jsx';

class SpotContainer extends React.Component{
    
        state = {
            spot: {},
            recommendations: []
        }

    componentDidMount(){
        fetch(`http://localhost:3000/neighborhoods/${this.props.neighborhood_id}/spots/${this.props.spot_id}`, {
            method: "GET",
            headers: {
                "Authorization": localStorage.token
            }
        })
        .then(response => response.json())
        .then(spot => {
            // debugger
            // console.log(spot)
            this.setState({
                spot: spot
            })
        })
        fetch(`http://localhost:3000/neighborhoods/${this.props.neighborhood_id}/spots/${this.props.spot_id}/recommendations`)
        .then(res => res.json())
        .then(arrayOfRec => {
            console.log(arrayOfRec)
            this.setState({
                recommendations: arrayOfRec
            })
        })
    }
    
    // handleInfo = () => {
    //     if (this.state.spot){
    //         let arrayOfStrings = this.state.spot.info.split(" /n ")
    //         console.log(arrayOfStrings)
    //         let listOfInfo = arrayOfStrings.map((singleSentence, index) => {
    //             return <InfoContainer key={index} sentence={singleSentence}/>
    //         })
    //         return listOfInfo
    //     }
    // }

    addRecommendationToState = (newRecommendation) => {
        let copyOfRecs = [...this.state.recommendations, newRecommendation]
        this.setState({
            recommendations: copyOfRecs
        })
    }

    deleteRecommendationFromState = (deletedObj) => {
        let copyOfRecs = this.state.recommendations.filter(recommendationObj => {
            return recommendationObj.id !== deletedObj.id
          })
          this.setState({
            recommendations: copyOfRecs
          })
    }

    render(){
        // debugger
        
        // console.log(this.state.spot)

        let arrayOfRecComponents = this.state.recommendations.map(recommendationObj => {
            return <SpotRecommendation
                key={recommendationObj.id}
                recommendation={recommendationObj}
                deleteRecommendationFromState={this.deleteRecommendationFromState}
            />
        })

        return(
            <div id="spot-page">
                {/* <h1>This is the Spot Component</h1> */}
                <div id="spot-info">
                    <h2>{this.state.spot.name}</h2>
                    <p>{this.state.spot.address}</p>
                    <RecommendationModal user_id={this.props.user.id} spot_id={this.state.spot.id} addRecommendationToState={this.addRecommendationToState}/>
                </div>
                <ul>
                    {/* {this.handleInfo()} */}
                </ul>
                <div id="spot-recommendations">
                    <h2 id="spot-recommendation-h2">Recommendations</h2>
                    {arrayOfRecComponents}
                    {/* <RecommendationsContainer neighborhood_id={this.props.neighborhood_id} spot_id={this.props.spot_id} spot={this.state.spot}/> */}
                </div>
            </div>
        )
    }
}

export default SpotContainer