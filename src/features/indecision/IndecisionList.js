import React from "react";
import IndecisionListItem from "./IndecisionListItem";

function IndecisionList(props) {
  function removeTask(id) {
    const newTasks = props.tasks.filter((task) => task.id !== id);
    props.setTasks(newTasks);
  }

  function renderList() {
    return props.tasks.map((task) => (
      <IndecisionListItem key={task.id} task={task} removeTask={removeTask} />
    ));
  }

  return (
    <div>
      <h3>My Tasks</h3>
      <ul>{renderList()}</ul>
    </div>
  );
}

export default IndecisionList;
