import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-materialize';

class Task extends Component {
  render() {
    const { task } = this.props;

    return (
      <Container>
        <Card>
          <Row>
            <p>Description: {task.description}</p>
          </Row>
          <Row>
            <Col s={4}>
              <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
            </Col>
            <Col s={4}>
              <p>Recurring Date: {new Date(task.recurringDate).toLocaleDateString()}</p>
            </Col>
            <Col s={4}>
              <p>Priority: {task.priority}</p>
            </Col>
          </Row>

          <Row>
            <Col s={4}>
              <p>Category: {task.category}</p>
            </Col>
            <Col s={4}>
              <p>Sub Tasks: {task.subTask}</p>
            </Col>
            <Col s={4}>
              <p>Notes: {task.notes}</p>
            </Col>
          </Row>
        </Card>
      </Container>
    )
  }
}

export default Task;