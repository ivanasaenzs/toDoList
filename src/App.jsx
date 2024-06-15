import { Box, Container, CssBaseline, Typography } from "@mui/material";

import BasicTextFields from "./components/AddTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          minHeight: "100vh",
          minWidth: "100%",
          backgroundColor: "lightpink",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginTop: "150px",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          To-Do List
        </Typography>
        <Box sx={{ width: "100%", maxWidth: "600px", marginTop: "16px" }}>
          <BasicTextFields />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "600px", marginTop: "16px" }}>
          <TaskList />
        </Box>
      </Container>
    </>
  );
}

export default App;
