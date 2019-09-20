import React from "react";

const AllTasks = props => {
  const EachTask = () => {
    return props.tasks.map((singleTask, index) => {
      return (
        <div className="each-task" key={index}>
          <label>
            <input
              type="checkbox"
              onChange={e => props.handleCheck(e, index)}
              checked={singleTask.complete}
            ></input>
            <span className="task-text">{singleTask.text}</span>
          </label>
          <button
            className="btn delete-btn"
            onClick={() => props.deleteTask(index)}
          >
            X
          </button>
        </div>
      );
    });
  };
  return (
    <div className="all-tasks">
      <EachTask></EachTask>
    </div>
  );
};

export default AllTasks;
