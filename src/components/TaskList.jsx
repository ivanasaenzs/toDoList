import { Box } from "@mui/material";
import { MdDoneOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export const TaskList = ({ tasks, completeTask }) => {
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
            <span>{task.description}</span>
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
                onClick={() => {
                  console.log(
                    `DELETE TASK ${task.description} button clicked!`
                  );
                }}
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
                onClick={() =>
                  console.log(`EDIT TASK ${task.description} button clicked!`)
                }
              >
                <FaRegEdit size={18} />
              </button>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};
