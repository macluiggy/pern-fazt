import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import { Container } from "@mui/material";
// components
import TaskForm from "./components/TaskForm";
import Menu from "./components/Navbar";
import TaskList from "./components/TaskList";

const HelloWorld = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Link to="/tasks/new">new task</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default hot(module)(HelloWorld);
