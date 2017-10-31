import React, { Component } from 'react';
import { Button, Input, Row, Col, Container } from 'react-materialize';
import { connect } from 'react-redux';
import { signUp } from '../../actions';

class SignUp extends Component {
  state = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  onSubmit() {
    const data = {
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signUp(data);
  }

  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col s={4}>
              <Input
                value={this.state.username}
                validate={true}
                onChange={(e) => this.setState({ username: e.target.value })}
                label="Username"
              />
            </Col>

            <Col s={4}>
              <Input
                value={this.state.firstname}
                validate={true}
                onChange={(e) => this.setState({ firstname: e.target.value })}
                label="First Name"
              />
            </Col>

            <Col s={4}>
              <Input
                value={this.state.lastname}
                validate={true}
                onChange={(e) => this.setState({ lastname: e.target.value })}
                label="Last Name"
              />
            </Col>
          </Row>

          <Row>
            <Col s={4}>
              <Input
                type="email"
                value={this.state.email}
                validate={true}
                onChange={(e) => this.setState({ email: e.target.value })}
                label="Email"
              />
            </Col>

            <Col s={4}>
              <Input
                type="password"
                value={this.state.password}
                validate={true}
                onChange={(e) => this.setState({ password: e.target.value })}
                label="Password"
              />
            </Col>

            <Col s={4}>
              <Input
                type="password"
                value={this.state.confirmPassword}
                validate={true}
                onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                label="Confirm Password"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={this.onSubmit.bind(this)}
                waves="light"
                className="blue">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(null, { signUp })(SignUp);
