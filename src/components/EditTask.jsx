import React from "react";

import { Button } from "@mui/material";
import { updateLocalStorage } from "../utils/localStorage";

export const EditTask = ({
  id,
  description,
  tasks,
  setTasks,
  setTaskToEdit,
  setFilteredTasks,
}) => {
  // Cancel edit by setting the task to null
  const handleCancelButton = () => {
    setTaskToEdit(null);
  };

  // Handles the actual editing of the task
  const handleEditTask = (e) => {
    e.preventDefault();

    const editedArray = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          description: e.target.taskDescription.value,
        };
      } else {
        return task;
      }
    });
    setTasks(editedArray);
    setFilteredTasks(editedArray);
    updateLocalStorage(editedArray);
    handleCancelButton();
  };

  return (
    <form onSubmit={handleEditTask}>
      <textarea defaultValue={description} name="taskDescription"></textarea>
      <Button type="submit">Edit</Button>
      <Button onClick={handleCancelButton}>Cancel</Button>
    </form>
  );
};
