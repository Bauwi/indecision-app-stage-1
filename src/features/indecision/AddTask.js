import React, { useState } from "react";

function AddTask(props) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.handleAddTask({ name, id: 234 });
    setName("");
  }

  return (
    <div>
      <h3>Add a task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          New task name:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
