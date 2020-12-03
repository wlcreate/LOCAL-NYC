import React from 'react'

class LogInForm extends React.Component {

        state = {
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
            let {username, password} = this.state
            fetch("http://localhost:3000/users/login",{
                method: "POST",
                headers: {
                    "Content-type": "Application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                }
                )
            })
            .then (resp => resp.json())
            .then (res => {
                this.props.helpHandleResponse(res)
            })
                
        }

    render() {
        let {username, password} = this.state
        return(
           <form class="home" onSubmit={this.handleSubmit}>
               <h1 class="home form name">Log In</h1>
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


export default LogInForm;