import React, { Component } from "react";
import "./styles/base.css";
import "./styles/App.css";

import Header from "./components/Header.js";
import NewTask from "./components/NewTask.js";
import AllTasks from "./components/AllTasks.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: []
    };
  }
  addNew = newTaskText => {
    let newTask = {};
    newTask.text = newTaskText;
    newTask.complete = false;
    let allTasksCopy = this.state.allTasks;
    allTasksCopy.push(newTask);
    this.setState({ allTasks: allTasksCopy });
  };
  deleteTask = taskIndex => {
    let allTasksCopy = this.state.allTasks;
    allTasksCopy.splice(taskIndex, 1);
    this.setState({ allTasks: allTasksCopy });
  };
  handleCheck = (event, taskIndex) => {
    let allTasksCopy = this.state.allTasks;
    allTasksCopy[taskIndex].complete = event.target.checked;
    this.setState({ allTasks: allTasksCopy });
  };
  render() {
    return (
      <div className="App">
        <Header tasksCount={this.state.allTasks.length}></Header>
        <NewTask addNew={this.addNew}></NewTask>
        {this.state.allTasks.length > 0 && (
          <AllTasks
            tasks={this.state.allTasks}
            deleteTask={this.deleteTask}
            handleCheck={this.handleCheck}
          ></AllTasks>
        )}
      </div>
    );
  }
}

export default App;
