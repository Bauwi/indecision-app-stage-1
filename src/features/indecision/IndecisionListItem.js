import React from "react";

function IndecisionListItem(props) {
  return (
    <li>
      <h4>{props.task.name}</h4>
      <button onClick={() => props.removeTask(props.task.id)}>Remove</button>
    </li>
  );
}

export default IndecisionListItem;
