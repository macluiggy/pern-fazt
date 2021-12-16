import React from "react";
import {
  Button,
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <Link to="/">PERN STACK</Link>
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/tasks/new")}
            >
              New task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
