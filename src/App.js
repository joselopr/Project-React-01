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

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks});
  }

  checkDone = () => {

  }

  render() {
    return <div>
    < TaskForm addTask={this.addTask} />
    < Tasks tasks={this.state.tasks} deleteTask={this.deleteTask}/>
    </div>
  }
}


export default App;
