import React, { Component } from 'react';
import { Row, Col, Button, Container, Input } from 'react-materialize';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

class AddTask extends Component {
  state = {
    description: '',
    dueDate: '',
    recurringDate: '',
    category: '',
    notes: '',
    priority: '',
    subTask:''
  }

  onSubmit() {
    const task = {
      description: this.state.description,
      dueDate: this.state.dueDate,
      recurringDate: this.state.recurringDate,
      category: this.state.category,
      notes: this.state.notes,
      priority: this.state.priority,
      subTask: this.state.subTask
    };
    this.props.addTask(task);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col s={12}>
            <Input
              value={this.state.description}
              label="Description"
              onChange={(e) => this.setState({ description: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>
        <Row>
          <Col s={6}>
            <Input
              type="date"
              value={this.state.dueDate}
              label="Due Date"
              onChange={(e) => this.setState({ dueDate: e.target.value })}
              validate={true}
            />
          </Col>
          <Col s={6}>
            <Input
              type="date"
              value={this.state.recurringDate}
              label="Recurring Date"
              onChange={(e) => this.setState({ recurringDate: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Input
              value={this.state.subTask}
              label="Sub Task"
              onChange={(e) => this.setState({ subTask: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>
        <Row>
          <Col s={6}>
            <Input
              value={this.state.priority}
              label="Priority"
              onChange={(e) => this.setState({ priority: e.target.value })}
              validate={true}
            />
          </Col>
          <Col s={6}>
            <Input
              value={this.state.category}
              label="Category"
              onChange={(e) => this.setState({ category: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Input
              value={this.state.notes}
              label="Notes"
              onChange={(e) => this.setState({ notes: e.target.value })}
              validate={true}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <Button
              onClick={this.onSubmit.bind(this)}
              waves="light"
              className="blue">
              Add Task
              </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { addTask })(AddTask);