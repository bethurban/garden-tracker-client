import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { createLocation } from '../actions/location.js';

class LocationForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      locationName: ""
    };
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleOnChange = event => {
    this.setState({locationName: event.target.value})
  }

  handleOnSubmit = event => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.props.createLocation(this.state.locationName, this.props.user)
  }

  render() {
    const name = this.props.locationFormData;
    return (
      <div>
        <Button color="success" onClick={this.toggle}>Add a new garden bed</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Form>
              <FormGroup>
                <Input type="text" name="name" value={name} id="name" placeholder="Name this garden bed" onChange={this.handleOnChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.handleOnSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )}
}

const mapStateToProps = state => {
  return {
    user: state.users.user.id
  }
}

export default connect (mapStateToProps, { createLocation })(LocationForm);
