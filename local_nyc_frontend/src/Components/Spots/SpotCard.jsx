import React from 'react';
import {NavLink} from 'react-router-dom';

class SpotCard extends React.Component{

    handleClick = (evt) => {
        this.props.changeSpotID(this.props.spot.id)
    }

    render(){

        let {name, id} = this.props.spot
        let {neighborhood_id} = this.props
        let path = "/neighborhoods/" + neighborhood_id + "/spots/" + id 

        return(
            <div class="ui raised card" id="spot">
                <NavLink to={path} onClick={this.handleClick}>
                    <div class="center aligned header">
                        {name}
                    </div>
                </NavLink>
            </div>
        )
    }
}

export default SpotCard