import React from 'react';

class RegistrationForm extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        let {first_name, last_name, username, password} = this.state
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                first_name,
                last_name,
                username,
                password
            })
        })
        .then (resp => resp.json())
        .then (res => {
            this.props.helpHandleResponse(res)
        })
            
    }

    render(){
        let {first_name, last_name, username, password} = this.state
        return(
            <form class="home" onSubmit={this.handleSubmit}>
                <h1 class="home form name">Register</h1>
                <label class="home-label" htmlFor="first_name">First Name</label>
                <input class="home-input" type="text" autoComplete="off" 
                    name="first_name"
                    value={first_name}
                    onChange={this.handleChange}
                />
                <br></br>
                <label class="home-label" htmlFor="last_name">Last Name</label>
                <input class="home-input" type="text" autoComplete="off" 
                    name="last_name"
                    value={last_name}
                    onChange={this.handleChange}
                />
                <br></br>
                <label class="home-label" htmlFor="username">Username</label>
               <input class="home-input" type="text" autoComplete="off"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                />
                <br></br>
                <label class="home-label" htmlFor="password">Password</label>
               <input class="home-input" type="password" autoComplete="off"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                />
                <br></br>
                <input class="home submit" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default RegistrationForm;