import React from 'react';

const handleSubmit = (event) => {
  // stop event from leaving the form
  event.stopPropagation();

  const newTask = {
    name: event.target.taskName.value,
    desc: event.target.taskDesc.value,
  };
};

const TaskForm = (props) => (
  <form className="form-inline" onSubmit={handleSubmit}>

    <div className="form-group">
      <label className="sr-only" htmlFor="taskName">Task Name</label>
      <input type="text" className="form-control input-lg" name="taskName" placeholder="Task Name" />
    </div>

    <div className="form-group">
      <label className="sr-only" htmlFor="taskDesc">Task Description</label>
      <input type="text" className="form-control input-lg" name="taskDesc" placeholder="Task Description" />
    </div>
    <button type="submit" className="btn btn-danger btn-lg">Add Task</button>
  </form>
);

export default TaskForm;
