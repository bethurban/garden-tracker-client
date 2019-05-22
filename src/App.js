import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import Navigation from './containers/Navigation.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }

}

export default App;
