import { useState } from "react";

import { EditTask } from "./EditTask";
import BasicModal from "./DeleteModal";
import { Box } from "@mui/material";

import { MdDoneOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export const TaskList = ({
  completeTask,
  deleteTask,
  tasks,
  setTasks,
  setFilteredTasks,
}) => {
  // Functions that handle the opening and closing of the modal and the edit button
  const [isOpen, setIsOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleOpen = (taskId) => {
    setTaskToDelete(taskId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTaskToDelete(null);
  };

  // Function that does the actual deletion by calling the function to delete task and to close the modal
  const handleDelete = () => {
    deleteTask(taskToDelete);
    handleClose();
  };

  // Handles the edit button of every task
  const handleEditButton = (taskId) => {
    setTaskToEdit(taskId);
  };

  return (
    <Box
      className="todo__container"
      sx={{
        width: "100%",
        maxWidth: "450px",
        margin: "auto",
        marginTop: "40px",
        backgroundColor: "lightpink",
        overflowX: "hidden",
      }}
    >
      <ul
        className="todo__list"
        style={{
          width: "100%",
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
      >
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
              padding: "8px",
              backgroundColor: "#fff",
              borderRadius: "4px",
              opacity: task.completed ? "0.5" : "1",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {taskToEdit === task.id ? (
              <EditTask
                description={task.description}
                id={task.id}
                tasks={tasks}
                setTaskToEdit={setTaskToEdit}
                setTasks={setTasks}
                setFilteredTasks={setFilteredTasks}
              />
            ) : (
              <span>{task.description}</span>
            )}

            {taskToEdit !== task.id && (
              <Box>
                <button
                  id={`complete-btn-${task.id}`}
                  title={
                    task.completed
                      ? "Not done? Click again to un-complete task"
                      : "Click here if you completed your task!"
                  }
                  style={{
                    backgroundColor: "green",
                    padding: "8px",
                    marginRight: "3px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  onClick={() => {
                    completeTask(task.id);
                    console.log(
                      `Task ${task.description} has been completed button!`
                    );
                  }}
                >
                  <MdDoneOutline size={18} />
                </button>
                <button
                  id={`trash-btn-${task.id}`}
                  title="Want to delete the task? Click here!"
                  style={{
                    backgroundColor: "orange",
                    padding: "8px",
                    marginRight: "3px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  onClick={() => handleOpen(task.id)}
                >
                  <GoTrash size={18} />
                </button>
                <button
                  id={`edit-btn-${task.id}`}
                  title="Let's edit this thing"
                  style={{
                    backgroundColor: "lightblue",
                    padding: "8px",
                    cursor: "pointer",
                    border: "none",
                    borderRadius: "4px",
                  }}
                  onClick={() => {
                    handleEditButton(task.id);
                    console.log(
                      `EDIT TASK ${task.description} button clicked!`
                    );
                  }}
                >
                  <FaRegEdit size={18} />
                </button>
              </Box>
            )}
          </li>
        ))}
      </ul>

      {/* Modal component that handles the actual deletion */}
      <BasicModal
        isOpen={isOpen}
        handleDelete={handleDelete}
        handleClose={handleClose}
      ></BasicModal>
    </Box>
  );
};
