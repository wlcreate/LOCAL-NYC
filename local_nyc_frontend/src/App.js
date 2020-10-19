import React from 'react';
import './App.css';
import Header from './Components/header.jsx';
import Navbar from './Components/navbar.jsx';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom';
import LogInForm from './Components/loginform.jsx';
import Home from './Components/home.jsx';

class App extends React.Component {

      state = {
        id: 0,
        username: "",
        recommendations: "",
        token: "",
      }
      renderForm = (routerProps) => {
        if (routerProps.location.pathname === "/login")
        {
          return <LogInForm helpHandleResponse={this.helpHandleResponse}/>
        }
      }
      helpHandleResponse = (res) => {
        if (res.error) {
          console.error(res.error)
        }
        else {
          localStorage.token = res.token
          this.setState({
            id: res.user.id,
            username: res.user.username,
            recommendations: res.user.recommendations,
            token: res.token 
          })
          this.props.history.push("/profile")
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
          <Route path="/register" render={this.renderRegisterForm}/>
          <Route path="/profile" render={this.renderProfile}/>
        </Switch>
      </div>
    );
  }
}

export default App;
