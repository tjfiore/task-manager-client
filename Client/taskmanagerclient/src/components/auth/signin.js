import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import { withRouter } from 'react-router-dom';
import { Row, Col, Input, Button, Container } from 'react-materialize';

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }

  componentWillReceiveProps(nextProps) {
    return nextProps === this.props ? '' 
    :
    this.props.history.push('/');
  }

  onSubmit() {
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.signIn(data);
  }
  
  render() {
    return (
      <Container>
        <Row>
          <Col s={4}>
            <Input
              value={this.state.username}
              label="Username"
              onChange={(e) => this.setState({ username: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>

        <Row>
          <Col s={4}>
            <Input
              type="password"
              value={this.state.password}
              label="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>

        <Row>
          <Col s={4}>
            <Button
              onClick={this.onSubmit.bind(this)}
              waves="light"
              className="blue">
              Sign In
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    signedIn: state.signedIn
  }
}

export default withRouter(connect(mapStateToProps, { signIn })(SignIn));