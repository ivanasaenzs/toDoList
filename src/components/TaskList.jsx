import { Box } from "@mui/material";

import { MdDoneOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

export const TaskList = () => {
  return (
    <Box
      className="todo__container"
      sx={{
        width: "100%",
        maxWidth: "450px",
        margin: "auto",
        marginTop: "40px",
        backgroundColor: "#fff",
        overflowX: "hidden",
      }}
    >
      <ul
        className="todo__list"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          padding: 0,
          margin: 0,
          listStyle: "none",
        }}
      >
        <li
          id="todo__item"
          style={{ flex: 1, marginLeft: "6px", listStyle: "none" }}
        >
          To-Do item hardcodeado
        </li>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "flex-end",
            height: "50px",
          }}
        >
          <button
            id="complete-btn"
            style={{
              backgroundColor: "green",
              padding: "18px",
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => console.log("Task has been completed button!")}
          >
            <MdDoneOutline size={18} />
          </button>
          <button
            id="trash-btn"
            style={{
              backgroundColor: "orange",
              padding: "18px",
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => console.log("DELETE TASK button clicked!")}
          >
            <GoTrash size={18} />
          </button>
          <button
            id="edit-btn"
            style={{
              backgroundColor: "lightblue",
              padding: "18px",
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => console.log("EDIT TASK button clicked!")}
          >
            <FaRegEdit size={18} />
          </button>
        </Box>
      </ul>
    </Box>
  );
};
