import React from 'react';
import {NavLink} from 'react-router-dom';

class Neighborhood extends React.Component{

    handleClick = (evt) => {
        this.props.changeNeighborhoodID(this.props.neighborhood.id)
    }

    render(){

        let {name, id} = this.props.neighborhood
        let path = "/neighborhoods/" + id + "/spots"

        return(
            <div>
                <NavLink to={path} onClick={this.handleClick}>{name}</NavLink>
            </div>
        )
    }
}


export default Neighborhood