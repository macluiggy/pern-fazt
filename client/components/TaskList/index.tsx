import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      // console.log(data);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      <h1>Task list </h1>
      {tasks.map(({ description, id, status, title }) => (
        <Card
          key={id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#fff",
              }}
            >
              <Typography>{title}</Typography>
              <Typography>{description}</Typography>
            </div>

            <div>
              {" "}
              <Button
                variant="contained"
                color="inherit"
                onClick={() => console.log("edit")}
                style={{
                  marginRight: ".5rem",
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => console.log("delete")}
              >
                Delete
              </Button>{" "}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
export default TaskList;
