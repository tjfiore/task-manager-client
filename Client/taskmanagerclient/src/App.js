import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SignUp from './components/auth/signup';
import SignIn from './components/auth/signin';
import Home from './components/home';
import AddTask from './components/tasks/addTask';
import { Navbar } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          
        </Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/tasks/add" component={AddTask} />
      </div>
    );
  }
}

export default App;
