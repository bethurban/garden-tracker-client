import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap';
import { connect } from 'react-redux';

class LocationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="success" onClick={this.toggle}>Add a new garden bed</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>

            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
            </Form>

          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Add garden bed</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )}
}

export default LocationForm;
