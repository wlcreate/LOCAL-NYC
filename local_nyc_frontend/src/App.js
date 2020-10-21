import React from 'react';
import './App.css';
import Header from './Components/header.jsx';
import Navbar from './Components/navbar.jsx';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import LogInForm from './Components/loginform.jsx';
import Home from './Components/home.jsx';
import RegistrationForm from './Components/registrationform.jsx';
import ProfileContainer from './Components/Profile/profileContainer.jsx';
import NeighborhoodContainer from './Components/Neighborhood/NeighborhoodContainer.jsx';
import SpotsContainer from './Components/Spots/SpotsContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // for the profileModal

// ? How do we clean up this mess?
// import {Header, Navbar, Home, LogInForm, RegistrationForm} from '../Components/'

class App extends React.Component {

      state = {
        id: 0,
        user: {},
        token: "",
        neighborhood_id: ""
      }

      componentDidMount(){
        if(localStorage.token){
          // Any time that you want to CRUD user information, send the token to the backend
    
          // Any time that you send the token to the backend, the controller action needs a:
            // before_action :authorized
          fetch("http://localhost:3000/users/keep_logged_in", {
            method: "GET",
            headers: {
              "Authorization": localStorage.token
            }
          })
            .then(res => res.json())
            .then(this.helpHandleResponse)
        }
      }

      renderForm = (routerProps) => {
        if (routerProps.location.pathname === "/login"){
          return <LogInForm helpHandleResponse={this.helpHandleResponse}/>
        } else if (routerProps.location.pathname === "/register") {
          return <RegistrationForm helpHandleResponse={this.helpHandleResponse} />
        } 
      }

      helpHandleResponse = (res) => {
        if (res.error) {
          console.error(res.error) // show the user the error eventually
        }
        else {
          localStorage.token = res.token
          this.setState({
            id: res.user.id,
            user: res.user,
            token: res.token 
          })
          this.props.history.push("/profile")
        }
      }

      renderProfile = (routerProps) => {
        if (this.state.token) {
          return <ProfileContainer
            user={this.state.user} 
            token={this.state.token}
          />
        } else {
          return <Redirect to="/login" />
        }
      }
      
      renderNeighborhoods = (routerProps) => {
        if (this.state.token) {
          return <NeighborhoodContainer
            user={this.state.user} 
            token={this.state.token}
            changeNeighborhoodID={this.changeNeighborhoodID}
          />
        } else {
          return <Redirect to="/login" />
        }
      }

      changeNeighborhoodID = (chosenNeighborhood) => {
        this.setState({
          neighborhood_id: chosenNeighborhood
        })
      }

      renderSpots = (routerProps) => {
        if (this.state.token) {
          return <SpotsContainer
            user={this.state.user} 
            token={this.state.token}
            neighborhood_id={this.state.neighborhood_id}
          />
        } else {
          return <Redirect to="/login" />
        }
      }

  render() {
    return (
      <div className="App">
        <header className="App-header"> 
        <Header />
        <Navbar />
        </header>
        <Switch> 
          <Route path="/" exact component={Home}/>
          <Route path="/login" render={this.renderForm}/>
          <Route path="/register" render={this.renderForm}/>
          <Route path="/profile" render={this.renderProfile}/>
          <Route path="/neighborhoods" render={this.renderNeighborhoods}/> 
          <Route path="/neighborhoods/:id/spots" render={this.renderSpots}/> 
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

let magicalComponent = withRouter(App)
export default magicalComponent
