import { useState } from "react";

import BasicTextFields from "./components/AddTask";
import { TaskList } from "./components/TaskList";

import { getTasks, updateLocalStorage } from "./utils/localStorage";

import { Box, Container, CssBaseline, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(getTasks() || []);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const addTask = (task) => {
    const newTask = {
      completed: false,
      description: task,
      id: uuidv4(),
    };

    const updatedTasks = [...tasks, newTask];
    updateLocalStorage(updatedTasks);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    updateLocalStorage(updatedTasks);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    updateLocalStorage(updatedTasks);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
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
          <BasicTextFields
            addTask={addTask}
            setFilteredTasks={setFilteredTasks}
            tasks={tasks}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "600px", marginTop: "16px" }}>
          <TaskList
            completeTask={completeTask}
            deleteTask={deleteTask}
            setTasks={setTasks}
            setFilteredTasks={setFilteredTasks}
            tasks={filteredTasks}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
