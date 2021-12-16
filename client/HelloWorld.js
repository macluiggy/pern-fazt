import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Container } from "@mui/material";
// components
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

const HelloWorld = () => {
  return (
    <BrowserRouter>
      <h1>Hello World, como estan todos dddheshedd</h1>
      {/* <Navbar /> */}
      <Link to="/tasks/new">new task</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default hot(module)(HelloWorld);
