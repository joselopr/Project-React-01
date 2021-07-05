import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';


// Components
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';


class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return <div>
    < TaskForm />
    < Tasks tasks={this.state.tasks}/>

    </div>
  }
}


export default App;
