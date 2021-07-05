import React, { Component } from 'react';

export default class TaskForm extends Component {

  onSubmit = e => {
    e.preventDefault();
  }

  onChange = e => {
    console.log(e.target.value)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" placeholder='Write a Task' onChange={this.onChange} />
          <br />
          <br />
        <textarea placeholder='Write a description' onChange={this.onChange}> </textarea>
        <input type="submit" />
      </form>
      )
  }
}


