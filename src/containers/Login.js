import React, { Component } from 'react';
import fire from '../config/fire';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './Login.css';

class Login extends Component {

  logIn() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successful login: " + u.user.email);
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      })
  }

  signUp() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successful signup: " + u.user.email);
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      })
  }

  render() {
    return (
      <Form className="login-form">
        <h1>Garden Tracker</h1>
        <FormGroup>
          <Label>Email</Label>
          <Input id="email" placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input id="password" placeholder="Password"/>
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block" onClick={this.logIn}>Log in</Button>
        <div className="text-center">
          <Button onClick={this.signUp}>Sign up</Button>
        </div>
      </Form>
    )
  }
}

export default Login;
