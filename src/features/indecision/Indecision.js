import React, { useState } from "react";

import IndecisionList from "./IndecisionList";
import AddTask from "./AddTask";
import GiveMeATask from "./GiveMeATask";

import initialTasks from "../../common/mocks/tasks";

function Indecision() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState({});

  function handleAddTask(task) {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
  }

  function selectRandomTask() {
    const tasksLength = tasks.length;
    const randomIndex = Math.floor(Math.random() * tasksLength);
    setSelectedTask(tasks[randomIndex]);
  }

  return (
    <div>
      <GiveMeATask
        tasks={tasks}
        selectedTask={selectedTask}
        selectRandomTask={selectRandomTask}
      />
      <IndecisionList tasks={tasks} setTasks={setTasks} />
      <AddTask handleAddTask={handleAddTask} />
    </div>
  );
}

export default Indecision;
