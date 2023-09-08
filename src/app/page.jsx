"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMainTask] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    // console.log(title)
    // console.log(desc)

    setMainTask([...maintask, { title, desc }]);

    setTitle("");
    setDesc("");

    console.log(maintask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...maintask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h3>No task available</h3>;
  if (maintask.length > 0) {
    renderTask = maintask.map((t, i) => {
      return (
        <div key={i} className="d-flex justify-content-around  mb-3  ">
          <h5>{t.title}</h5>
          <h5>{t.desc}</h5>
          <button className="btn btn-success ">Edit</button>
          <button className="btn btn-danger " onClick={() => deleteHandler(i)}>
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="container">
        <div
          className="text-center mt-5 bg-black text-white"
          style={{ fontWeight: "900" }}
        >
          <h1>My Todo List</h1>
        </div>

        <div className="text-center mt-5">
          <form action="" onSubmit={submitHandle}>
            <div className="row">
              <div className="col-lg-4">
                <div className="mt-3">
                  <label htmlFor="" className="form-label">Task</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your task here"
                    id=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 mx-3 "
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="mt-3">
                  <label htmlFor="" className="form-label">Description</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your description here"
                    id=""
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    className="p-2 mx-3 "
                  />
                </div>
              </div>

              <div className="col-lg-4">
                <div className="mt-3">
                  <button className="btn btn-dark">Add Task</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="bg-secondary p-5 mt-5 rounded-4 ">
          <ul type="none">
            <li>{renderTask}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
