import React from "react";

function GiveMeATask(props) {
  return (
    <div>
      <h3>Task selector</h3>
      <button onClick={props.selectRandomTask}>GIMME A TASK BOT !</button>
      <p>
        {" "}
        Bot assigned you :{" "}
        {props.selectedTask.name
          ? props.selectedTask.name
          : "-- No task selected yet --"}
      </p>
    </div>
  );
}

export default GiveMeATask;
