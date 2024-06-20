import { useState } from "react";

import BasicTextFields from "./components/AddTask";
import { TaskList } from "./components/TaskList";

import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { getTasks, updateLocalStorage } from "./utils/localStorage";
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
    console.log("Task: ", newTask.description);
    console.log("Completed:  ", newTask.completed);
    console.log("Task ID: ", newTask.id);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  console.log(tasks);

  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
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
            tasks={tasks}
            setFilteredTasks={setFilteredTasks}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "600px", marginTop: "16px" }}>
          <TaskList
            tasks={filteredTasks}
            setTasks={setTasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;
