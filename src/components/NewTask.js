import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  addNew = () => {
    let newTaskText = this.state.newTask.trim();
    if (newTaskText) {
      this.props.addNew(this.state.newTask);
      this.setState({ newTask: "" });
    }
  };
  render() {
    var ENTER_KEY = 13;
    return (
      <div className="new-task-container">
        <input
          name="newTask"
          className="new-task-input"
          placeholder="New Task"
          value={this.state.newTask}
          onKeyDown={e => (e.keyCode === ENTER_KEY ? this.addNew() : null)}
          onChange={this.handleChange}
          autoFocus
        ></input>
        <button className="btn add-btn" onClick={this.addNew}>
          {" "}
          +{" "}
        </button>
      </div>
    );
  }
}

export default NewTask;
