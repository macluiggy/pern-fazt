import React from "react";
import "./taskform.scss";
import { Grid, Card, Typography } from "@mui/material";

function TaskForm() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card>
          <Typography>Create Task</Typography>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
