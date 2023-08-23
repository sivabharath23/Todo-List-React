import React, { useState } from "react";

const Content = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const inpChange = (e) => {
    setTask(e.target.value);
  };

  const addBtn = (e) => {
    e.preventDefault();
    if (task.trim() !== "") {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };

  const delBtn = (index) => {
    const newTasksList = tasksList.filter((_, i) => i !== index);
    setTasksList(newTasksList);
  };

  const editBtn = () => {};

  return (
    <div>
      <form className="form-control justify-content-between d-flex">
        <input
          type="text"
          className="border-0 p-2"
          placeholder="add the task"
          onChange={inpChange}
          value={task}
        />
        <button
          className="border-0 bg-primary p-1 rounded text-white ms-2"
          type="submit"
          onClick={addBtn}
        >
          Add task
        </button>
      </form>
      <div className="py-4">
        {tasksList.map((Item, index) => (
          <div
            key={index}
            className="list d-flex align-items-center bg-white shadow rounded px-2 py-1 justify-content-between mb-2"
          >
            <div className="d-flex align-items-center">
              <i className="fas fa-dot-circle ps-1"></i>
              <p className="align-items-center mb-0 ps-2">{Item}</p>
            </div>
            <div>
              <button className="btn" onClick={editBtn}>
                <i className="fas fa-edit text-secondary"></i>
              </button>
              <button className="btn">
                <i
                  className="fas fa-trash-alt text-danger"
                  onClick={() => delBtn(index)}
                ></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
