import React, { Component } from 'react';
import fire from './config/fire';
import { Button } from 'reactstrap';
import "./App.css";

class Home extends Component {

  logOut() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>You are logged in.</h1>
        <Button onClick={this.logOut}>Log out</Button>
      </div>
    )
  }
}

export default Home;
