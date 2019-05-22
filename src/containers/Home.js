import React, { Component } from 'react';
import fire from '../config/fire';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import '../App.css';

class Home extends Component {

  logOut() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>User id {this.props.user.id}</h1>
        <Button onClick={this.logOut}>Log out</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return({
    user: state.users.user
  })
}

export default connect(mapStateToProps)(Home);
