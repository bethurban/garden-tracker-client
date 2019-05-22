import React, { Component } from 'react';
import fire from './config/fire';
import './App.css';
import Home from './containers/Home.js';
import Login from './containers/Login.js';
import { checkUser, createUser } from './actions/login.js';
import { connect } from 'react-redux';


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
        this.props.checkUser(user.email)
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div>
        {this.state.user ? (<Home />) : (<Login />)}
      </div>
    );
  }

}

const mapStateToProps = state => {
  return({
    user: state.users.user
  })
}

export default connect(mapStateToProps, { checkUser, createUser })(App);
