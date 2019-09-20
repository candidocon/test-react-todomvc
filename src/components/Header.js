import React from "react";

const header = props => {
  return (
    <header>
      <h1 className="title">To-Do</h1>
      <span className="counter">
        {props.tasksCount} {props.tasksCount === 1 ? "Item" : "items"}
      </span>
    </header>
  );
};

export default header;
