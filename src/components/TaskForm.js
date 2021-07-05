import React, { Component } from 'react';

export default class TaskForm extends Component {

  state = {
    title: '',
    description: ''
  }

  onSubmit = e => {
    this.props.addTask(this.state.title, this.state.description)
    e.preventDefault();
  }

  onChange = e => {
    this.setState({
      title: e.target.value,
      description: e.target.value
    })
  }

  render() {

    return (
      <form onSubmit={this.onSubmit}>
        <input
        type="text"
        name="title"
        placeholder='Write a Task' onChange={this.onChange} value={this.state.title} />
          <br />
          <br />
        <textarea placeholder='Write a description' onChange={this.onChange} value={this.state.description}> </textarea>
        <input type="submit" />
      </form>
      )
  }
}


