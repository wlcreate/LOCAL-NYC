import React from 'react';
import {NavLink} from 'react-router-dom';
import { Card } from 'semantic-ui-react'

class Neighborhood extends React.Component{

    handleClick = (evt) => {
        this.props.changeNeighborhoodID(this.props.neighborhood.id)
    }

    render(){

        let {name, id} = this.props.neighborhood
        let path = "/neighborhoods/" + id + "/spots"

        return(
            <div class="ui raised card" id="neighborhood">
                <NavLink to={path} onClick={this.handleClick}>
                    {/* {name} */}
                    {/* <Card header={name} /> */}
                    <div class="center aligned header">
                        {name}
                    </div>
                </NavLink>
            </div>
        )
    }
}


export default Neighborhood