import React from "react";
import {
  Button,
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function Navbar() {
  return (
    <Box>
      <ThemeProvider>
        <AppBar position="static" color="tranparent">
          <Container>
            <Toolbar>
              <Typography>PERN STACK</Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
