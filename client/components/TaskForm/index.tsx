import React from "react";
import "./taskform.scss";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  TextField,
  Button,
} from "@mui/material";

function TaskForm() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card sx={{ mt: 5 }}>
          <Typography variant="h5" textAlign="center" color="white">
            Create Task
          </Typography>
          <CardContent>
            <form>
              <TextField
                variant="filled"
                label="Write your title"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
              />
              <TextField
                variant="filled"
                label="Write your description"
                multiline
                rows={4}
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                }}
              />

              <Button variant="contained" color="primary" type="submit">
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TaskForm;
