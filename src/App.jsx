import { useState } from "react";

import { Box, Container, CssBaseline, Typography } from "@mui/material";

import BasicTextFields from "./components/AddTask";
import { TaskList } from "./components/TaskList";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      completed: false,
      description: task,
      id: uuidv4(),
    };
    setTasks([...tasks, newTask]);
  };

  console.log(tasks);

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

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
          <BasicTextFields addTask={addTask} />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "600px", marginTop: "16px" }}>
          <TaskList tasks={tasks} completeTask={completeTask} />
        </Box>
      </Container>
    </>
  );
}

export default App;
