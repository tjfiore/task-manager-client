import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Button } from 'react-materialize';
import Task from '../tasks/task';
import { getTask } from '../../actions';

class Home extends Component {
  componentDidMount() {
    this.props.getTask();
  }

  render() {
    return (
      <Container>
        <Row>
          <Button
            waves="light"
            className="blue right">
            Add Task
          </Button>
        </Row>
        {
          this.props.tasks ?
          this.props.tasks.map(task => {
            return (
              <Row key={task._id}>
                <Task task={task} />
              </Row>
            )
          })
          :
          <Row>
            <h4>No Task(s) Available</h4>
          </Row>
        }
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { getTask })(Home);